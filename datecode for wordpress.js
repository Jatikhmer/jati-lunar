  <div id="app">
           
            <div class="poemMetalChhor">
                <h1 class="">
                    ថ្ងៃនេះ Today's Date
                </h1>

                <div class="kDate">
                    <p> {{ displayedDate }}</p>
                   
                    <p v-html="displayedKhmerDate"></p>
                </div>
                 <div align="center">
                <h2 class="kDate">
                   
                    ពេលដែលទេវតាចុះ ៖ គ.ស.
                    <vuejs-datepicker 
                        :value="formattedDate"
                        :format="DatePickerFormat"
                        :language="language"
                        @selected="pickedYear"
                        minimum-view="year"              
                        name="datepicker"
                        id="input-id"
                        wrapper-class="d-inline-block"
                        input-class="btn btn-secondary"></vuejs-datepicker>
                </h2>
                <div>
                    <p class="">
                        {{ newYearMoment }}
                    </p>
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/locale/km.min.js"></script>
        <script src="https://unpkg.com/vuejs-datepicker"></script>
        <script src="https://watkhmers.org/momentkh/constant.js"></script>
        <script src="https://watkhmers.org/momentkh/locale/km.js"></script>
        <script src="https://watkhmers.org/momentkh/getSoriyatraLerngSak.js"></script>
        <script src="https://watkhmers.org/momentkh/momentkh.js"></script>
        <script>
            window.onload = function() {
                var moment = momentkh(window.moment)

                new Vue({
                    el: "#app",
                    data() {
                        return {
                            format: 'dN ខែm ឆ្នាំa e ព.ស. b',
                            now: moment(),
                            date: moment(),
                            DatePickerFormat: 'yyyy',
                            language: {
                                language: 'Khmer', 
                                months: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'], 
                                monthsAbbr: ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'], 
                                days: ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បត្តិ៍', 'សុក្រ', 'សៅរ'], 
                                rtl: false, 
                                ymd: false, 
                                yearSuffix: ''
                            }
                        }
                    },
                    computed: {
                        year() {
                            return this.date.year()
                        },
                        formattedDate() {
                            return this.date.locale('en').format('YYYY-MM-DD')
                        },
                        displayedDate() {
                            return this.now
                        },
                        displayedKhmerDate() {
                            return this.now.locale('km').format('ថ្ងៃdddd ទីDD ខែMMMM ឆ្នាំYYYY') + '<br/>ត្រូវនឹង<br/>ថ្ងៃទី ' + this.now.toKhDate(this.format) + '<br/>' + this.now.locale('km').format('h:mm:ss a')
                        },
                        newYearMoment() {
                            return moment.getKhNewYearMoment(this.year).locale('km').format('ថ្ងៃdddd ទីDD ខែMMMM ឆ្នាំYYYY វេលាម៉ោង h:mm នាទី a')
                        }
                    },
                    methods: {
                        pickedYear(year) {
                            this.date = moment(year)
                        }
                    },
                    mounted() {
                        setInterval(() => {
                            this.now = moment()
                        }, 1000)
                    },
                    components: {
                        'vuejs-datepicker':vuejsDatepicker
                    }
                })
            }
        </script>