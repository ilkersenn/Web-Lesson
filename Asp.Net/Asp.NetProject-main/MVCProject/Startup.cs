using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MVCProject
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // Bu metot, runtime tarafından çağrılır. Burada servisleri eklemelisiniz.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<CookiePolicyOptions>(options =>
            {
                // Kullanıcı onayı gerektiren çerezler için bu lambda kullanılır.
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            // MVC servislerini ekleyin
            services.AddControllersWithViews(); // AddMvc yerine bu metodu kullanıyoruz.
        }

        // Bu metot, runtime tarafından çağrılır. Burada HTTP istek boru hattını yapılandırırsınız.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseCookiePolicy();

            // Yönlendirme ve endpoint ayarları
            app.UseRouting(); // UseRouting ekleyin.

            app.UseEndpoints(endpoints =>
            {
                // Varsayılan rota ayarını yapın.
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Kitap}/{action=Giris}/{id?}"); //Siteye Giriş Ekranımızı View Kısmında tanımladığımız Giris yaptık.
            });
        }
    }
}
