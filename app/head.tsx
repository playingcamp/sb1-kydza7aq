// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Playing Camp – IA para founders</title>
      <meta name="description" content="Consultoría de IA para startups" />
      {/* Google Translate widget */}
      <script
        type="text/javascript"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'es',
                includedLanguages: 'en,es',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `,
        }}
      />
    </>
  );
}
