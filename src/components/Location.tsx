import { useTranslation } from "react-i18next";

const Location = () => {
  const { t } = useTranslation();

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
          {t("location.title")}
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("location.description")}
        </p>

        <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9593112478374!2d105.8149241!3d21.034314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab97265bd46f%3A0x636380a6dae63a71!2sWins%20Residences%20Hanoi!5e0!3m2!1svi!2s!4v1762341338342!5m2!1svi!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
