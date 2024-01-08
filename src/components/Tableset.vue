<template>
  <!-- 表格样例仅供参考 -->
  <div class="fitTable">
    <h2>{{ title[type - 1] }}</h2>
    <el-table
      v-if="type <= 6"
      :data="tableData"
      show-summary
      :summary-method="summaryMethod"
    >
      <el-table-column>
        <template #header>
          <div style="display: flex">
            <el-col class="flexTitle" :span="6"
              ><span>路线编码：</span
              ><el-input style="width: 150px" v-model="form.roadCode"
            /></el-col>
            <el-col class="flexTitle" :span="6"
              ><span>路线名称：</span
              ><el-input style="width: 150px" v-model="form.roadName"
            /></el-col>
            <el-col class="flexTitle" :span="6"
              ><span>调查方向：</span
              ><el-input style="width: 150px" v-model="form.direction"
            /></el-col>
            <el-col class="flexTitle" :span="6"
              ><span>路面宽度：</span
              ><el-input style="width: 150px" v-model="form.roadWidth"
            /></el-col>
          </div>
          <div style="display: flex">
            <el-col class="flexTitle" :span="6"
              ><span>起讫桩号：</span
              ><el-input style="width: 150px" v-model="form.startToEndK"
            /></el-col>
            <el-col class="flexTitle" :span="6"
              ><span>单元长度：</span
              ><el-input style="width: 150px" v-model="form.elementLen"
            /></el-col>
            <el-col class="flexTitle" :span="6"
              ><span>调查时间：</span
              ><el-input style="width: 150px" v-model="form.SearchTime"
            /></el-col>
            <el-col class="flexTitle" :span="6"
              ><span>调查人员：</span
              ><el-input style="width: 150px" v-model="form.searchStaff"
            /></el-col>
          </div>
        </template>
        <el-table-column v-if="type <= 6" prop="K_No" width="240">
          <template #header style="display: flex">
            <div>
              <div>起止点桩号</div>
              <div>（百米统计）</div>
            </div>
            <el-button :icon="Plus" @click="add"></el-button>
          </template>
          <template #default="scope">
            <el-input v-model="scope.row.K_No"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          v-for="(item, index) in columns[type - 1]"
          :prop="item.key"
          :label="item.label"
        >
          <template #default="scope">
            <el-input v-model="scope.row[item.key]"></el-input>
          </template>
        </el-table-column>

        <!-- 表格A-5 -->
        <el-table-column v-if="type === 5" label="桥梁（座）">
          <el-table-column prop="b1" label="1、2">
            <template #default="scope">
              <el-input v-model="scope.row.b1"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="b2" label="3">
            <template #default="scope">
              <el-input v-model="scope.row.b2"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="b3" label="4">
            <template #default="scope">
              <el-input v-model="scope.row.b3"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="b4" label="5">
            <template #default="scope">
              <el-input v-model="scope.row.b4"></el-input>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column v-if="type === 5" label="涵洞（道）">
          <el-table-column prop="h1" label="好、较好">
            <template #default="scope">
              <el-input v-model="scope.row.h1"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="h2" label="较差">
            <template #default="scope">
              <el-input v-model="scope.row.h2"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="h3" label="差">
            <template #default="scope">
              <el-input v-model="scope.row.h3"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="h4" label="危险">
            <template #default="scope">
              <el-input v-model="scope.row.h4"></el-input>
            </template>
          </el-table-column>
        </el-table-column>
        <el-table-column v-if="type === 5" label="隧道（座）">
          <el-table-column prop="t1" label="1、2">
            <template #default="scope">
              <el-input v-model="scope.row.t1"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="t2" label="3">
            <template #default="scope">
              <el-input v-model="scope.row.t2"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="t3" label="4">
            <template #default="scope">
              <el-input v-model="scope.row.t3"></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="t4" label="5">
            <template #default="scope">
              <el-input v-model="scope.row.t4"></el-input>
            </template>
          </el-table-column>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <el-button :icon="Minus" @click="sub(scope.$index)"></el-button>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <template v-else>
      <div style="width: 100%; display: flex; justify-content: space-between">
        <span
          >填报单位：<el-input style="width: 240px" v-model="form.company"></el-input
        ></span>
        <span
          ><el-input class="inputdate" v-model="form.year"></el-input>年<el-input
            class="inputdate"
            v-model="form.mouth"
          ></el-input
          >月<el-input class="inputdate" v-model="form.day"></el-input>日</span
        >
      </div>
      <el-table :data="tableData">
        <template v-for="(item, index) in columns[type - 1]">
          <el-table-column v-if="!item.children" :prop="item.key" :label="item.label">
            <template #default="scope">
              <el-input v-model="scope.row[item.key]"></el-input>
            </template>
          </el-table-column>
          <el-table-column v-else :label="item.label">
            <el-table-column
              v-for="(child, index) in item.children"
              :prop="child.key"
              :label="child.label"
            >
              <template #default="scope">
                <el-input v-model="scope.row[child.key]"></el-input>
              </template>
            </el-table-column>
          </el-table-column>
        </template>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button :icon="Minus" @click="sub(scope.$index)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="display: flex;justify-content:right">
        <span>
          第<el-input class="inputdate" v-model="form.year"></el-input>页&nbsp;&nbsp;总<el-input
            class="inputdate"
            v-model="form.mouth"
          ></el-input
          >页</span
        >
        <el-button :icon="Plus" @click="add"></el-button>
      </div>
    </template>
  </div>
</template>

<style>
.fitTable {
  width: 95%;
  margin: auto;
}
.flexTitle {
  display: flex;
}
.inputdate {
  width: 50px;
}
</style>

<script setup>
import { Plus, Minus } from "@element-plus/icons-vue";
import { ref, defineProps } from "vue";
const props = defineProps({
  type: Number, //表格类型，如A-1就是1
});
const tableData = ref([{}]);
const form = ref({  // A1~6的表头表单
  // 表头参数
  roadCode: "",
  roadName: "",
  direction: "",
  roadWidth: "",
  startToEndK: "",
  elementLen: "",
  SearchTime: "",
  searchStaff: "",
});
const title = ref([   // 表名
  "农村公路路基技术状况调查表",
  "农村公路沥青路面损坏状况调查表",
  "农村公路水泥混凝土路面损坏状况调查表",
  "农村公路砂石路面损坏状况调查表",
  "农村公路桥隧构造物技术状况调查表",
  "农村公路桥隧构造物技术状况调查表",
  "农村公路桥隧构造物技术状况调查表",
  "农村公路桥隧构造物技术状况调查表",
]);
const columns = ref([ // 列名
  [
    // A-1
    {
      key: "slopeCollapse",
      label: "边坡坍塌（处）",
    },
    {
      key: "damageToProtect",
      label: "防护及支挡结构物损坏（处）",
    },
    {
      key: "subgradeSettlement",
      label: "路基沉降（处）",
    },
    {
      key: "poorDrainage",
      label: "排水不畅（处）",
    },
  ],
  [
    // A-2
    {
      key: "longitudinalCrack",
      label: "纵向裂缝（㎡）",
    },
    {
      key: "transverseCrack",
      label: "横向裂缝（㎡）",
    },
    {
      key: "reticulumFissure",
      label: "网裂（㎡）",
    },
    {
      key: "pitGroove",
      label: "坑槽（㎡）",
    },
    {
      key: "loose",
      label: "松散（㎡）",
    },
  ],
  [
    // A-3
    {
      key: "slopeCollapse",
      label: "边坡坍塌（处）",
    },
    {
      key: "damageToProtect",
      label: "防护及支挡结构物损坏（处）",
    },
    {
      key: "subgradeSettlement",
      label: "路基沉降（处）",
    },
    {
      key: "poorDrainage",
      label: "排水不畅（处）",
    },
  ],
  [
    // A-4
    {
      key: "slopeCollapse",
      label: "边坡坍塌（处）",
    },
    {
      key: "damageToProtect",
      label: "防护及支挡结构物损坏（处）",
    },
    {
      key: "subgradeSettlement",
      label: "路基沉降（处）",
    },
    {
      key: "poorDrainage",
      label: "排水不畅（处）",
    },
  ],
  [
    // A-5
  ],
  [
    // A-6
    {
      key: "slopeCollapse",
      label: "边坡坍塌（处）",
    },
    {
      key: "damageToProtect",
      label: "防护及支挡结构物损坏（处）",
    },
    {
      key: "subgradeSettlement",
      label: "路基沉降（处）",
    },
    {
      key: "poorDrainage",
      label: "排水不畅（处）",
    },
  ],
  [
    // A-7
    {
      key: "slopeCollapse",
      label: "边坡坍塌（处）",
    },
    {
      key: "damageToProtect",
      label: "防护及支挡结构物损坏（处）",
    },
    {
      key: "subgradeSettlement",
      label: "路基沉降（处）",
    },
    {
      key: "poorDrainage",
      label: "排水不畅（处）",
    },
    {
      label: "MQI等级分布（km）",
      children: [
        { key: "wonderful", label: "优" },
        { key: "great", label: "良" },
        { key: "soso", label: "中" },
      ],
    },
  ],
]);
const add = () => {
  tableData.value.push({});
};
const sub = (id) => {
  tableData.value.splice(id, 1);
};
console.log(columns.value[6]);
const summaryMethod = ({ columns, data }) => {
  const sums = [];
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = "总计"; // 将第一列的统计行标题设置为 "总计"
      return;
    }
    const values = data.map((item) => Number(item[column.property]));
    if (!values.every((value) => isNaN(value))) {
      sums[index] = values.reduce((prev, curr) => {
        const value = Number(curr);
        if (!isNaN(value)) {
          return prev + curr;
        } else {
          return prev;
        }
      }, 0);
    } else {
      sums[index] = "";
    }
  });
  return sums;
};
</script>
