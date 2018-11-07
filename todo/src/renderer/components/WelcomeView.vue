<template>
  <v-layout>
    <v-flex xs12>
      <v-list two-line>
        <template v-for="(td, i) in todos">
          <v-list-tile
              :key="td.title"
              avatar
              @click=""
          >
            <v-list-tile-avatar>
              <v-icon :color="td.done ? 'success' : 'secondary'">{{td.done ? 'check' : 'hourglass_empty'}}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title v-html="td.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="td.content"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </template>
      </v-list>
    </v-flex>

    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-btn
          color="primary"
          dark
          fab
          fixed
          bottom
          right
          slot="activator"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">할일 작성</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="제목" required counter="40" prepend-icon="title"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="내용" hint="굳이 넣고 싶다면.." counter="40" prepend-icon="note"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-menu
                      ref="menuDate"
                      :close-on-content-click="false"
                      v-model="menuDate"
                      :nudge-right="40"
                      :return-value.sync="date"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      min-width="290px"
                  >
                    <v-text-field
                        slot="activator"
                        v-model="date"
                        label="목표 날짜"
                        prepend-icon="event"
                        readonly
                    ></v-text-field>
                    <v-date-picker v-model="date" @input="$refs.menuDate.save(date)"></v-date-picker>

                  </v-menu>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-menu
                      ref="menuTime"
                      :close-on-content-click="false"
                      v-model="menuTime"
                      :nudge-right="40"
                      :return-value.sync="time"
                      lazy
                      transition="scale-transition"
                      offset-y
                      full-width
                      max-width="290px"
                      min-width="290px"
                  >
                    <v-text-field
                        slot="activator"
                        v-model="time"
                        label="목표 시간"
                        prepend-icon="access_time"
                        readonly
                    ></v-text-field>
                    <v-time-picker
                        v-if="menuTime"
                        v-model="time"
                        @change="$refs.menuTime.save(time)"
                    ></v-time-picker>
                  </v-menu>
                </v-flex>

                <v-flex xs12 sm6>
                  <v-select
                      :items="['집', '직장', '밖']"
                      label="종류"
                      required
                  ></v-select>
                </v-flex>

              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    name: 'welcome',
    data () {
      return {
        todos: [
          {
            rt: new Date(),
            t: new Date(),
            type: 0,
            title: '빨래 널기',
            content: '그만하고 싶다...',
            done: false
          }
        ],
        menuDate: false,
        menuTime: false,
        date: null,
        time: null,
        valid: false,
        dialog: false
      }
    },
    methods: {
      save () {
        this.dialog = false
      }
    }
  }
</script>

<style scoped>
</style>
