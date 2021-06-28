<template>
    <div>
        <!--begin::Footer-->
            <!--doc: add "bg-white" class to have footer with solod background color-->
            <div class="footer py-4 d-flex flex-lg-column" id="kt_footer" style="position: fixed;bottom: 0px;left: 220px;width: 100%;margin-top:20px">
                <!--begin::Container-->
                <div class="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                    <!--begin::Copyright-->
                    <div class="text-dark order-2 order-md-1">
                        <span class="text-muted font-weight-bold mr-2">2021©</span>
                        <a href="https://joseera.com/" target="_blank" class="text-dark-75 text-hover-primary">Company | Jose Era</a>
                    </div>
                    <!--end::Copyright-->
                </div>
                <!--end::Container-->
            </div>
            <!--end::Footer-->
    </div>
</template>

<style>
    @media (max-width: 700px){
        #kt_footer{
            left: 0!important;
        }
    }

</style>