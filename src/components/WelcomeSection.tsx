const videoUrl = 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4';
const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=320x320&chl=${encodeURIComponent(videoUrl)}&choe=UTF-8`;

export default function WelcomeSection() {
  return (
    <section className="bg-white/95 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.6fr_1fr] items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] shadow-sm">
            Bienvenida
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-dark">
            Video de bienvenida tipo diapositiva
          </h2>
          <p className="max-w-2xl text-on-surface-variant leading-relaxed text-base md:text-lg">
            Descubre en pocos segundos la magia de Helados Hellen: sabores artesanales, entrega fría y una experiencia pensada para disfrutar.
            Escanea el QR y abre el video directamente en tu teléfono.
          </p>

          <div className="overflow-hidden rounded-[2rem] border border-rose-100 shadow-2xl">
            <video
              controls
              poster="https://images.unsplash.com/photo-1510626176961-4b34ee831ab8?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-full bg-black"
            >
              <source src={videoUrl} type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
        </div>

        <aside className="rounded-[2rem] border border-rose-100 bg-rose-50/90 p-8 shadow-2xl text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary text-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
              Escanea el QR
            </div>
            <h3 className="text-2xl font-bold text-neutral-dark">Abre el video en tu teléfono</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              El código QR te lleva directamente al mismo video de bienvenida. Ideal para mostrarlo a tus clientes o compartirlo desde el celular.
            </p>
          </div>

          <div className="mx-auto mt-6 w-full max-w-xs rounded-[1.75rem] border border-white bg-white p-4 shadow-lg">
            <img
              src={qrUrl}
              alt="QR code para el video de bienvenida de Helados Hellen"
              className="w-full h-full rounded-[1.25rem] object-cover"
            />
          </div>

          <a
            href={videoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-primary-hover transition-colors"
          >
            Ver video ahora
          </a>
        </aside>
      </div>
    </section>
  );
}
