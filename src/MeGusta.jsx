
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import "./MeGusta.css";

function MeGusta() {
    const [count, setCount] = useState(0);
    const [yaGusto, setYaGusto] = useState(false);
    const [cargando, setCargando] = useState(true);
    const [procesando, setProcesando] = useState(false);

    useEffect(() => {
        const cargarLikes = async () => {
            try {
                let visitorId = localStorage.getItem("biovida_visitor_id");

                if (!visitorId) {
                    visitorId = crypto.randomUUID();
                    localStorage.setItem("biovida_visitor_id", visitorId);
                }

                const { count: total, error: errorTotal } =
                    await supabase
                        .from("bio_likes")
                        .select("*", { count: "exact", head: true });

                if (errorTotal) throw errorTotal;

                const { data, error } = await supabase
                    .from("bio_likes")
                    .select("visitor_id")
                    .eq("visitor_id", visitorId)
                    .maybeSingle();

                if (error) throw error;

                setCount(total || 0);
                setYaGusto(Boolean(data));

            } catch (error) {
                console.error("Error al cargar los Me gusta:", error);
            } finally {
                setCargando(false);
            }
        };

        cargarLikes();
    }, []);

    const darMeGusta = async () => {
        if (yaGusto || procesando) return;

        setProcesando(true);

        try {
            const visitorId = localStorage.getItem("biovida_visitor_id");

            const { data, error } = await supabase.rpc(
                "registrar_me_gusta",
                { p_visitor_id: visitorId }
            );

            if (error) throw error;

            if (data && data.length > 0) {
                setCount(Number(data[0].total));
                setYaGusto(data[0].ya_dio_me_gusta);
            }

        } catch (error) {
            console.error("Error al registrar el Me gusta:", error);
            alert("No se pudo registrar tu Me gusta. Intenta nuevamente.");
        } finally {
            setProcesando(false);
        }
    };

    return (
        <section className="biovida-likes">
            <div className="likes-contenido">

                <div className="likes-icono">
                    <i className="bi bi-heart-fill"></i>
                </div>

                <h2>¡Nos gusta cuidar el planeta!</h2>

                <p>
                    Tu apoyo nos motiva a seguir transformando
                    residuos en oportunidades para un futuro
                    más sustentable.
                </p>

                <button
                    className={`likes-boton ${yaGusto ? "liked" : ""}`}
                    onClick={darMeGusta}
                    disabled={cargando || yaGusto || procesando}
                >
                    <i className={`bi ${yaGusto ? "bi-heart-fill" : "bi-heart"}`}></i>

                    {cargando
                        ? "Cargando..."
                        : yaGusto
                            ? "¡Gracias por tu apoyo!"
                            : procesando
                                ? "Registrando..."
                                : "Me gusta BIOVIDA"}
                </button>

                <div className="likes-contador">
                    <strong>
                        {cargando ? "..." : count.toLocaleString("es-MX")}
                    </strong>

                    <span>
                        personas apoyan a BIOVIDA
                    </span>
                </div>

                <div className="likes-mensaje">
                    <i className="bi bi-leaf-fill"></i>
                    Cada Me gusta representa un paso hacia un planeta mejor.
                </div>

            </div>
        </section>
    );
}

export default MeGusta;
