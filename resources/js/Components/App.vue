<template>
   <div>
       	<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="d-flex flex-row flex-column-fluid page">
                <Header></Header>
				<!--begin::Wrapper-->
				<div class="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Subheader-->
						<Aside></Aside>

						<!--end::Subheader-->
						<!--begin::Entry-->
						<div class="d-flex flex-column-fluid">
                               <main class="container" style="padding-bottom: 50px;">
                                    <Home></Home>
                                </main>
                            
						</div>
						<!--end::Entry-->
					</div>
					<!--end::Content-->
					<Footer></Footer>
				</div>
				<!--end::Wrapper-->
			</div>
			<!--end::Page-->
		</div>
   </div>
</template>

<script>
import Footer from '../Layouts/Footer.vue'
import Header from '../Layouts/Header.vue'
import Sidebar from '../Layouts/Sidebar.vue'
import Aside from '../Layouts/Aside.vue'
import Home from './Home.vue'

export default {
    components :{
        Footer,
        Sidebar,
        Aside,
        Header,
        Home
    }
}
</script>