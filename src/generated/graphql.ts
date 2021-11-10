import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "plan" */
  delete_plan?: Maybe<Plan_Mutation_Response>;
  /** delete single row from the table: "plan" */
  delete_plan_by_pk?: Maybe<Plan>;
  /** delete data from the table: "plan_day" */
  delete_plan_day?: Maybe<Plan_Day_Mutation_Response>;
  /** delete single row from the table: "plan_day" */
  delete_plan_day_by_pk?: Maybe<Plan_Day>;
  /** delete data from the table: "plan_day_passage" */
  delete_plan_day_passage?: Maybe<Plan_Day_Passage_Mutation_Response>;
  /** delete single row from the table: "plan_day_passage" */
  delete_plan_day_passage_by_pk?: Maybe<Plan_Day_Passage>;
  /** delete data from the table: "plan_journey" */
  delete_plan_journey?: Maybe<Plan_Journey_Mutation_Response>;
  /** delete single row from the table: "plan_journey" */
  delete_plan_journey_by_pk?: Maybe<Plan_Journey>;
  /** delete data from the table: "plan_journey_day" */
  delete_plan_journey_day?: Maybe<Plan_Journey_Day_Mutation_Response>;
  /** delete single row from the table: "plan_journey_day" */
  delete_plan_journey_day_by_pk?: Maybe<Plan_Journey_Day>;
  /** insert data into the table: "plan" */
  insert_plan?: Maybe<Plan_Mutation_Response>;
  /** insert data into the table: "plan_day" */
  insert_plan_day?: Maybe<Plan_Day_Mutation_Response>;
  /** insert a single row into the table: "plan_day" */
  insert_plan_day_one?: Maybe<Plan_Day>;
  /** insert data into the table: "plan_day_passage" */
  insert_plan_day_passage?: Maybe<Plan_Day_Passage_Mutation_Response>;
  /** insert a single row into the table: "plan_day_passage" */
  insert_plan_day_passage_one?: Maybe<Plan_Day_Passage>;
  /** insert data into the table: "plan_journey" */
  insert_plan_journey?: Maybe<Plan_Journey_Mutation_Response>;
  /** insert data into the table: "plan_journey_day" */
  insert_plan_journey_day?: Maybe<Plan_Journey_Day_Mutation_Response>;
  /** insert a single row into the table: "plan_journey_day" */
  insert_plan_journey_day_one?: Maybe<Plan_Journey_Day>;
  /** insert a single row into the table: "plan_journey" */
  insert_plan_journey_one?: Maybe<Plan_Journey>;
  /** insert a single row into the table: "plan" */
  insert_plan_one?: Maybe<Plan>;
  /** update data of the table: "plan" */
  update_plan?: Maybe<Plan_Mutation_Response>;
  /** update single row of the table: "plan" */
  update_plan_by_pk?: Maybe<Plan>;
  /** update data of the table: "plan_day" */
  update_plan_day?: Maybe<Plan_Day_Mutation_Response>;
  /** update single row of the table: "plan_day" */
  update_plan_day_by_pk?: Maybe<Plan_Day>;
  /** update data of the table: "plan_day_passage" */
  update_plan_day_passage?: Maybe<Plan_Day_Passage_Mutation_Response>;
  /** update single row of the table: "plan_day_passage" */
  update_plan_day_passage_by_pk?: Maybe<Plan_Day_Passage>;
  /** update data of the table: "plan_journey" */
  update_plan_journey?: Maybe<Plan_Journey_Mutation_Response>;
  /** update single row of the table: "plan_journey" */
  update_plan_journey_by_pk?: Maybe<Plan_Journey>;
  /** update data of the table: "plan_journey_day" */
  update_plan_journey_day?: Maybe<Plan_Journey_Day_Mutation_Response>;
  /** update single row of the table: "plan_journey_day" */
  update_plan_journey_day_by_pk?: Maybe<Plan_Journey_Day>;
};


/** mutation root */
export type Mutation_RootDelete_PlanArgs = {
  where: Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Plan_By_PkArgs = {
  plan_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Plan_DayArgs = {
  where: Plan_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Plan_Day_By_PkArgs = {
  plan_day_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Plan_Day_PassageArgs = {
  where: Plan_Day_Passage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Plan_Day_Passage_By_PkArgs = {
  plan_day_passage_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Plan_JourneyArgs = {
  where: Plan_Journey_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Plan_Journey_By_PkArgs = {
  plan_journey_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Plan_Journey_DayArgs = {
  where: Plan_Journey_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Plan_Journey_Day_By_PkArgs = {
  plan_journey_day_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_PlanArgs = {
  objects: Array<Plan_Insert_Input>;
  on_conflict?: Maybe<Plan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_DayArgs = {
  objects: Array<Plan_Day_Insert_Input>;
  on_conflict?: Maybe<Plan_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_Day_OneArgs = {
  object: Plan_Day_Insert_Input;
  on_conflict?: Maybe<Plan_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_Day_PassageArgs = {
  objects: Array<Plan_Day_Passage_Insert_Input>;
  on_conflict?: Maybe<Plan_Day_Passage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_Day_Passage_OneArgs = {
  object: Plan_Day_Passage_Insert_Input;
  on_conflict?: Maybe<Plan_Day_Passage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_JourneyArgs = {
  objects: Array<Plan_Journey_Insert_Input>;
  on_conflict?: Maybe<Plan_Journey_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_Journey_DayArgs = {
  objects: Array<Plan_Journey_Day_Insert_Input>;
  on_conflict?: Maybe<Plan_Journey_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_Journey_Day_OneArgs = {
  object: Plan_Journey_Day_Insert_Input;
  on_conflict?: Maybe<Plan_Journey_Day_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_Journey_OneArgs = {
  object: Plan_Journey_Insert_Input;
  on_conflict?: Maybe<Plan_Journey_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Plan_OneArgs = {
  object: Plan_Insert_Input;
  on_conflict?: Maybe<Plan_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_PlanArgs = {
  _inc?: Maybe<Plan_Inc_Input>;
  _set?: Maybe<Plan_Set_Input>;
  where: Plan_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_By_PkArgs = {
  _inc?: Maybe<Plan_Inc_Input>;
  _set?: Maybe<Plan_Set_Input>;
  pk_columns: Plan_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_DayArgs = {
  _inc?: Maybe<Plan_Day_Inc_Input>;
  _set?: Maybe<Plan_Day_Set_Input>;
  where: Plan_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_Day_By_PkArgs = {
  _inc?: Maybe<Plan_Day_Inc_Input>;
  _set?: Maybe<Plan_Day_Set_Input>;
  pk_columns: Plan_Day_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_Day_PassageArgs = {
  _inc?: Maybe<Plan_Day_Passage_Inc_Input>;
  _set?: Maybe<Plan_Day_Passage_Set_Input>;
  where: Plan_Day_Passage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_Day_Passage_By_PkArgs = {
  _inc?: Maybe<Plan_Day_Passage_Inc_Input>;
  _set?: Maybe<Plan_Day_Passage_Set_Input>;
  pk_columns: Plan_Day_Passage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_JourneyArgs = {
  _inc?: Maybe<Plan_Journey_Inc_Input>;
  _set?: Maybe<Plan_Journey_Set_Input>;
  where: Plan_Journey_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_Journey_By_PkArgs = {
  _inc?: Maybe<Plan_Journey_Inc_Input>;
  _set?: Maybe<Plan_Journey_Set_Input>;
  pk_columns: Plan_Journey_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_Journey_DayArgs = {
  _inc?: Maybe<Plan_Journey_Day_Inc_Input>;
  _set?: Maybe<Plan_Journey_Day_Set_Input>;
  where: Plan_Journey_Day_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Plan_Journey_Day_By_PkArgs = {
  _inc?: Maybe<Plan_Journey_Day_Inc_Input>;
  _set?: Maybe<Plan_Journey_Day_Set_Input>;
  pk_columns: Plan_Journey_Day_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "plan" */
export type Plan = {
  __typename?: 'plan';
  name: Scalars['String'];
  /** An array relationship */
  plan_days: Array<Plan_Day>;
  /** An aggregate relationship */
  plan_days_aggregate: Plan_Day_Aggregate;
  plan_id: Scalars['Int'];
  /** An array relationship */
  plan_journeys: Array<Plan_Journey>;
  /** An aggregate relationship */
  plan_journeys_aggregate: Plan_Journey_Aggregate;
};


/** columns and relationships of "plan" */
export type PlanPlan_DaysArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Order_By>>;
  where?: Maybe<Plan_Day_Bool_Exp>;
};


/** columns and relationships of "plan" */
export type PlanPlan_Days_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Order_By>>;
  where?: Maybe<Plan_Day_Bool_Exp>;
};


/** columns and relationships of "plan" */
export type PlanPlan_JourneysArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Order_By>>;
  where?: Maybe<Plan_Journey_Bool_Exp>;
};


/** columns and relationships of "plan" */
export type PlanPlan_Journeys_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Order_By>>;
  where?: Maybe<Plan_Journey_Bool_Exp>;
};

/** aggregated selection of "plan" */
export type Plan_Aggregate = {
  __typename?: 'plan_aggregate';
  aggregate?: Maybe<Plan_Aggregate_Fields>;
  nodes: Array<Plan>;
};

/** aggregate fields of "plan" */
export type Plan_Aggregate_Fields = {
  __typename?: 'plan_aggregate_fields';
  avg?: Maybe<Plan_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Plan_Max_Fields>;
  min?: Maybe<Plan_Min_Fields>;
  stddev?: Maybe<Plan_Stddev_Fields>;
  stddev_pop?: Maybe<Plan_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plan_Stddev_Samp_Fields>;
  sum?: Maybe<Plan_Sum_Fields>;
  var_pop?: Maybe<Plan_Var_Pop_Fields>;
  var_samp?: Maybe<Plan_Var_Samp_Fields>;
  variance?: Maybe<Plan_Variance_Fields>;
};


/** aggregate fields of "plan" */
export type Plan_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Plan_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Plan_Avg_Fields = {
  __typename?: 'plan_avg_fields';
  plan_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "plan". All fields are combined with a logical 'AND'. */
export type Plan_Bool_Exp = {
  _and?: Maybe<Array<Plan_Bool_Exp>>;
  _not?: Maybe<Plan_Bool_Exp>;
  _or?: Maybe<Array<Plan_Bool_Exp>>;
  name?: Maybe<String_Comparison_Exp>;
  plan_days?: Maybe<Plan_Day_Bool_Exp>;
  plan_id?: Maybe<Int_Comparison_Exp>;
  plan_journeys?: Maybe<Plan_Journey_Bool_Exp>;
};

/** unique or primary key constraints on table "plan" */
export enum Plan_Constraint {
  /** unique or primary key constraint */
  PlanPkey = 'plan_pkey'
}

/** columns and relationships of "plan_day" */
export type Plan_Day = {
  __typename?: 'plan_day';
  day: Scalars['Int'];
  /** An object relationship */
  plan: Plan;
  plan_day_id: Scalars['Int'];
  /** An array relationship */
  plan_day_passages: Array<Plan_Day_Passage>;
  /** An aggregate relationship */
  plan_day_passages_aggregate: Plan_Day_Passage_Aggregate;
  plan_id: Scalars['Int'];
};


/** columns and relationships of "plan_day" */
export type Plan_DayPlan_Day_PassagesArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Passage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Passage_Order_By>>;
  where?: Maybe<Plan_Day_Passage_Bool_Exp>;
};


/** columns and relationships of "plan_day" */
export type Plan_DayPlan_Day_Passages_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Passage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Passage_Order_By>>;
  where?: Maybe<Plan_Day_Passage_Bool_Exp>;
};

/** aggregated selection of "plan_day" */
export type Plan_Day_Aggregate = {
  __typename?: 'plan_day_aggregate';
  aggregate?: Maybe<Plan_Day_Aggregate_Fields>;
  nodes: Array<Plan_Day>;
};

/** aggregate fields of "plan_day" */
export type Plan_Day_Aggregate_Fields = {
  __typename?: 'plan_day_aggregate_fields';
  avg?: Maybe<Plan_Day_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Plan_Day_Max_Fields>;
  min?: Maybe<Plan_Day_Min_Fields>;
  stddev?: Maybe<Plan_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Plan_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plan_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Plan_Day_Sum_Fields>;
  var_pop?: Maybe<Plan_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Plan_Day_Var_Samp_Fields>;
  variance?: Maybe<Plan_Day_Variance_Fields>;
};


/** aggregate fields of "plan_day" */
export type Plan_Day_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Plan_Day_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "plan_day" */
export type Plan_Day_Aggregate_Order_By = {
  avg?: Maybe<Plan_Day_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Plan_Day_Max_Order_By>;
  min?: Maybe<Plan_Day_Min_Order_By>;
  stddev?: Maybe<Plan_Day_Stddev_Order_By>;
  stddev_pop?: Maybe<Plan_Day_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Plan_Day_Stddev_Samp_Order_By>;
  sum?: Maybe<Plan_Day_Sum_Order_By>;
  var_pop?: Maybe<Plan_Day_Var_Pop_Order_By>;
  var_samp?: Maybe<Plan_Day_Var_Samp_Order_By>;
  variance?: Maybe<Plan_Day_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "plan_day" */
export type Plan_Day_Arr_Rel_Insert_Input = {
  data: Array<Plan_Day_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Plan_Day_On_Conflict>;
};

/** aggregate avg on columns */
export type Plan_Day_Avg_Fields = {
  __typename?: 'plan_day_avg_fields';
  day?: Maybe<Scalars['Float']>;
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "plan_day" */
export type Plan_Day_Avg_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "plan_day". All fields are combined with a logical 'AND'. */
export type Plan_Day_Bool_Exp = {
  _and?: Maybe<Array<Plan_Day_Bool_Exp>>;
  _not?: Maybe<Plan_Day_Bool_Exp>;
  _or?: Maybe<Array<Plan_Day_Bool_Exp>>;
  day?: Maybe<Int_Comparison_Exp>;
  plan?: Maybe<Plan_Bool_Exp>;
  plan_day_id?: Maybe<Int_Comparison_Exp>;
  plan_day_passages?: Maybe<Plan_Day_Passage_Bool_Exp>;
  plan_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "plan_day" */
export enum Plan_Day_Constraint {
  /** unique or primary key constraint */
  PlanDayPkey = 'plan_day_pkey'
}

/** input type for incrementing numeric columns in table "plan_day" */
export type Plan_Day_Inc_Input = {
  day?: Maybe<Scalars['Int']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "plan_day" */
export type Plan_Day_Insert_Input = {
  day?: Maybe<Scalars['Int']>;
  plan?: Maybe<Plan_Obj_Rel_Insert_Input>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_day_passages?: Maybe<Plan_Day_Passage_Arr_Rel_Insert_Input>;
  plan_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Plan_Day_Max_Fields = {
  __typename?: 'plan_day_max_fields';
  day?: Maybe<Scalars['Int']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "plan_day" */
export type Plan_Day_Max_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Plan_Day_Min_Fields = {
  __typename?: 'plan_day_min_fields';
  day?: Maybe<Scalars['Int']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "plan_day" */
export type Plan_Day_Min_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "plan_day" */
export type Plan_Day_Mutation_Response = {
  __typename?: 'plan_day_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Plan_Day>;
};

/** input type for inserting object relation for remote table "plan_day" */
export type Plan_Day_Obj_Rel_Insert_Input = {
  data: Plan_Day_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Plan_Day_On_Conflict>;
};

/** on conflict condition type for table "plan_day" */
export type Plan_Day_On_Conflict = {
  constraint: Plan_Day_Constraint;
  update_columns?: Array<Plan_Day_Update_Column>;
  where?: Maybe<Plan_Day_Bool_Exp>;
};

/** Ordering options when selecting data from "plan_day". */
export type Plan_Day_Order_By = {
  day?: Maybe<Order_By>;
  plan?: Maybe<Plan_Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_day_passages_aggregate?: Maybe<Plan_Day_Passage_Aggregate_Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** columns and relationships of "plan_day_passage" */
export type Plan_Day_Passage = {
  __typename?: 'plan_day_passage';
  passage: Scalars['String'];
  plan_day_id: Scalars['Int'];
  plan_day_passage_id: Scalars['Int'];
};

/** aggregated selection of "plan_day_passage" */
export type Plan_Day_Passage_Aggregate = {
  __typename?: 'plan_day_passage_aggregate';
  aggregate?: Maybe<Plan_Day_Passage_Aggregate_Fields>;
  nodes: Array<Plan_Day_Passage>;
};

/** aggregate fields of "plan_day_passage" */
export type Plan_Day_Passage_Aggregate_Fields = {
  __typename?: 'plan_day_passage_aggregate_fields';
  avg?: Maybe<Plan_Day_Passage_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Plan_Day_Passage_Max_Fields>;
  min?: Maybe<Plan_Day_Passage_Min_Fields>;
  stddev?: Maybe<Plan_Day_Passage_Stddev_Fields>;
  stddev_pop?: Maybe<Plan_Day_Passage_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plan_Day_Passage_Stddev_Samp_Fields>;
  sum?: Maybe<Plan_Day_Passage_Sum_Fields>;
  var_pop?: Maybe<Plan_Day_Passage_Var_Pop_Fields>;
  var_samp?: Maybe<Plan_Day_Passage_Var_Samp_Fields>;
  variance?: Maybe<Plan_Day_Passage_Variance_Fields>;
};


/** aggregate fields of "plan_day_passage" */
export type Plan_Day_Passage_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Plan_Day_Passage_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "plan_day_passage" */
export type Plan_Day_Passage_Aggregate_Order_By = {
  avg?: Maybe<Plan_Day_Passage_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Plan_Day_Passage_Max_Order_By>;
  min?: Maybe<Plan_Day_Passage_Min_Order_By>;
  stddev?: Maybe<Plan_Day_Passage_Stddev_Order_By>;
  stddev_pop?: Maybe<Plan_Day_Passage_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Plan_Day_Passage_Stddev_Samp_Order_By>;
  sum?: Maybe<Plan_Day_Passage_Sum_Order_By>;
  var_pop?: Maybe<Plan_Day_Passage_Var_Pop_Order_By>;
  var_samp?: Maybe<Plan_Day_Passage_Var_Samp_Order_By>;
  variance?: Maybe<Plan_Day_Passage_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "plan_day_passage" */
export type Plan_Day_Passage_Arr_Rel_Insert_Input = {
  data: Array<Plan_Day_Passage_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Plan_Day_Passage_On_Conflict>;
};

/** aggregate avg on columns */
export type Plan_Day_Passage_Avg_Fields = {
  __typename?: 'plan_day_passage_avg_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_day_passage_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Avg_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "plan_day_passage". All fields are combined with a logical 'AND'. */
export type Plan_Day_Passage_Bool_Exp = {
  _and?: Maybe<Array<Plan_Day_Passage_Bool_Exp>>;
  _not?: Maybe<Plan_Day_Passage_Bool_Exp>;
  _or?: Maybe<Array<Plan_Day_Passage_Bool_Exp>>;
  passage?: Maybe<String_Comparison_Exp>;
  plan_day_id?: Maybe<Int_Comparison_Exp>;
  plan_day_passage_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "plan_day_passage" */
export enum Plan_Day_Passage_Constraint {
  /** unique or primary key constraint */
  PlanDayPassagePkey = 'plan_day_passage_pkey'
}

/** input type for incrementing numeric columns in table "plan_day_passage" */
export type Plan_Day_Passage_Inc_Input = {
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_day_passage_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "plan_day_passage" */
export type Plan_Day_Passage_Insert_Input = {
  passage?: Maybe<Scalars['String']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_day_passage_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Plan_Day_Passage_Max_Fields = {
  __typename?: 'plan_day_passage_max_fields';
  passage?: Maybe<Scalars['String']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_day_passage_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Max_Order_By = {
  passage?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Plan_Day_Passage_Min_Fields = {
  __typename?: 'plan_day_passage_min_fields';
  passage?: Maybe<Scalars['String']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_day_passage_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Min_Order_By = {
  passage?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "plan_day_passage" */
export type Plan_Day_Passage_Mutation_Response = {
  __typename?: 'plan_day_passage_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Plan_Day_Passage>;
};

/** on conflict condition type for table "plan_day_passage" */
export type Plan_Day_Passage_On_Conflict = {
  constraint: Plan_Day_Passage_Constraint;
  update_columns?: Array<Plan_Day_Passage_Update_Column>;
  where?: Maybe<Plan_Day_Passage_Bool_Exp>;
};

/** Ordering options when selecting data from "plan_day_passage". */
export type Plan_Day_Passage_Order_By = {
  passage?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** primary key columns input for table: plan_day_passage */
export type Plan_Day_Passage_Pk_Columns_Input = {
  plan_day_passage_id: Scalars['Int'];
};

/** select columns of table "plan_day_passage" */
export enum Plan_Day_Passage_Select_Column {
  /** column name */
  Passage = 'passage',
  /** column name */
  PlanDayId = 'plan_day_id',
  /** column name */
  PlanDayPassageId = 'plan_day_passage_id'
}

/** input type for updating data in table "plan_day_passage" */
export type Plan_Day_Passage_Set_Input = {
  passage?: Maybe<Scalars['String']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_day_passage_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Plan_Day_Passage_Stddev_Fields = {
  __typename?: 'plan_day_passage_stddev_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_day_passage_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Stddev_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Plan_Day_Passage_Stddev_Pop_Fields = {
  __typename?: 'plan_day_passage_stddev_pop_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_day_passage_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Stddev_Pop_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Plan_Day_Passage_Stddev_Samp_Fields = {
  __typename?: 'plan_day_passage_stddev_samp_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_day_passage_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Stddev_Samp_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Plan_Day_Passage_Sum_Fields = {
  __typename?: 'plan_day_passage_sum_fields';
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_day_passage_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Sum_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** update columns of table "plan_day_passage" */
export enum Plan_Day_Passage_Update_Column {
  /** column name */
  Passage = 'passage',
  /** column name */
  PlanDayId = 'plan_day_id',
  /** column name */
  PlanDayPassageId = 'plan_day_passage_id'
}

/** aggregate var_pop on columns */
export type Plan_Day_Passage_Var_Pop_Fields = {
  __typename?: 'plan_day_passage_var_pop_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_day_passage_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Var_Pop_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Plan_Day_Passage_Var_Samp_Fields = {
  __typename?: 'plan_day_passage_var_samp_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_day_passage_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Var_Samp_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Plan_Day_Passage_Variance_Fields = {
  __typename?: 'plan_day_passage_variance_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_day_passage_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "plan_day_passage" */
export type Plan_Day_Passage_Variance_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_day_passage_id?: Maybe<Order_By>;
};

/** primary key columns input for table: plan_day */
export type Plan_Day_Pk_Columns_Input = {
  plan_day_id: Scalars['Int'];
};

/** select columns of table "plan_day" */
export enum Plan_Day_Select_Column {
  /** column name */
  Day = 'day',
  /** column name */
  PlanDayId = 'plan_day_id',
  /** column name */
  PlanId = 'plan_id'
}

/** input type for updating data in table "plan_day" */
export type Plan_Day_Set_Input = {
  day?: Maybe<Scalars['Int']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Plan_Day_Stddev_Fields = {
  __typename?: 'plan_day_stddev_fields';
  day?: Maybe<Scalars['Float']>;
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "plan_day" */
export type Plan_Day_Stddev_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Plan_Day_Stddev_Pop_Fields = {
  __typename?: 'plan_day_stddev_pop_fields';
  day?: Maybe<Scalars['Float']>;
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "plan_day" */
export type Plan_Day_Stddev_Pop_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Plan_Day_Stddev_Samp_Fields = {
  __typename?: 'plan_day_stddev_samp_fields';
  day?: Maybe<Scalars['Float']>;
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "plan_day" */
export type Plan_Day_Stddev_Samp_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Plan_Day_Sum_Fields = {
  __typename?: 'plan_day_sum_fields';
  day?: Maybe<Scalars['Int']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "plan_day" */
export type Plan_Day_Sum_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** update columns of table "plan_day" */
export enum Plan_Day_Update_Column {
  /** column name */
  Day = 'day',
  /** column name */
  PlanDayId = 'plan_day_id',
  /** column name */
  PlanId = 'plan_id'
}

/** aggregate var_pop on columns */
export type Plan_Day_Var_Pop_Fields = {
  __typename?: 'plan_day_var_pop_fields';
  day?: Maybe<Scalars['Float']>;
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "plan_day" */
export type Plan_Day_Var_Pop_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Plan_Day_Var_Samp_Fields = {
  __typename?: 'plan_day_var_samp_fields';
  day?: Maybe<Scalars['Float']>;
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "plan_day" */
export type Plan_Day_Var_Samp_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Plan_Day_Variance_Fields = {
  __typename?: 'plan_day_variance_fields';
  day?: Maybe<Scalars['Float']>;
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "plan_day" */
export type Plan_Day_Variance_Order_By = {
  day?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
};

/** input type for incrementing numeric columns in table "plan" */
export type Plan_Inc_Input = {
  plan_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "plan" */
export type Plan_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  plan_days?: Maybe<Plan_Day_Arr_Rel_Insert_Input>;
  plan_id?: Maybe<Scalars['Int']>;
  plan_journeys?: Maybe<Plan_Journey_Arr_Rel_Insert_Input>;
};

/** columns and relationships of "plan_journey" */
export type Plan_Journey = {
  __typename?: 'plan_journey';
  /** An object relationship */
  plan: Plan;
  plan_id: Scalars['Int'];
  /** An array relationship */
  plan_journey_days: Array<Plan_Journey_Day>;
  /** An aggregate relationship */
  plan_journey_days_aggregate: Plan_Journey_Day_Aggregate;
  plan_journey_id: Scalars['Int'];
};


/** columns and relationships of "plan_journey" */
export type Plan_JourneyPlan_Journey_DaysArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Day_Order_By>>;
  where?: Maybe<Plan_Journey_Day_Bool_Exp>;
};


/** columns and relationships of "plan_journey" */
export type Plan_JourneyPlan_Journey_Days_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Day_Order_By>>;
  where?: Maybe<Plan_Journey_Day_Bool_Exp>;
};

/** aggregated selection of "plan_journey" */
export type Plan_Journey_Aggregate = {
  __typename?: 'plan_journey_aggregate';
  aggregate?: Maybe<Plan_Journey_Aggregate_Fields>;
  nodes: Array<Plan_Journey>;
};

/** aggregate fields of "plan_journey" */
export type Plan_Journey_Aggregate_Fields = {
  __typename?: 'plan_journey_aggregate_fields';
  avg?: Maybe<Plan_Journey_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Plan_Journey_Max_Fields>;
  min?: Maybe<Plan_Journey_Min_Fields>;
  stddev?: Maybe<Plan_Journey_Stddev_Fields>;
  stddev_pop?: Maybe<Plan_Journey_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plan_Journey_Stddev_Samp_Fields>;
  sum?: Maybe<Plan_Journey_Sum_Fields>;
  var_pop?: Maybe<Plan_Journey_Var_Pop_Fields>;
  var_samp?: Maybe<Plan_Journey_Var_Samp_Fields>;
  variance?: Maybe<Plan_Journey_Variance_Fields>;
};


/** aggregate fields of "plan_journey" */
export type Plan_Journey_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Plan_Journey_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "plan_journey" */
export type Plan_Journey_Aggregate_Order_By = {
  avg?: Maybe<Plan_Journey_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Plan_Journey_Max_Order_By>;
  min?: Maybe<Plan_Journey_Min_Order_By>;
  stddev?: Maybe<Plan_Journey_Stddev_Order_By>;
  stddev_pop?: Maybe<Plan_Journey_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Plan_Journey_Stddev_Samp_Order_By>;
  sum?: Maybe<Plan_Journey_Sum_Order_By>;
  var_pop?: Maybe<Plan_Journey_Var_Pop_Order_By>;
  var_samp?: Maybe<Plan_Journey_Var_Samp_Order_By>;
  variance?: Maybe<Plan_Journey_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "plan_journey" */
export type Plan_Journey_Arr_Rel_Insert_Input = {
  data: Array<Plan_Journey_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Plan_Journey_On_Conflict>;
};

/** aggregate avg on columns */
export type Plan_Journey_Avg_Fields = {
  __typename?: 'plan_journey_avg_fields';
  plan_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "plan_journey" */
export type Plan_Journey_Avg_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "plan_journey". All fields are combined with a logical 'AND'. */
export type Plan_Journey_Bool_Exp = {
  _and?: Maybe<Array<Plan_Journey_Bool_Exp>>;
  _not?: Maybe<Plan_Journey_Bool_Exp>;
  _or?: Maybe<Array<Plan_Journey_Bool_Exp>>;
  plan?: Maybe<Plan_Bool_Exp>;
  plan_id?: Maybe<Int_Comparison_Exp>;
  plan_journey_days?: Maybe<Plan_Journey_Day_Bool_Exp>;
  plan_journey_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "plan_journey" */
export enum Plan_Journey_Constraint {
  /** unique or primary key constraint */
  PlanJourneyPkey = 'plan_journey_pkey'
}

/** columns and relationships of "plan_journey_day" */
export type Plan_Journey_Day = {
  __typename?: 'plan_journey_day';
  completed: Scalars['Boolean'];
  completed_date?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  plan_day: Plan_Day;
  plan_day_id: Scalars['Int'];
  /** An object relationship */
  plan_journey: Plan_Journey;
  plan_journey_day_id: Scalars['Int'];
  plan_journey_id: Scalars['Int'];
};

/** aggregated selection of "plan_journey_day" */
export type Plan_Journey_Day_Aggregate = {
  __typename?: 'plan_journey_day_aggregate';
  aggregate?: Maybe<Plan_Journey_Day_Aggregate_Fields>;
  nodes: Array<Plan_Journey_Day>;
};

/** aggregate fields of "plan_journey_day" */
export type Plan_Journey_Day_Aggregate_Fields = {
  __typename?: 'plan_journey_day_aggregate_fields';
  avg?: Maybe<Plan_Journey_Day_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Plan_Journey_Day_Max_Fields>;
  min?: Maybe<Plan_Journey_Day_Min_Fields>;
  stddev?: Maybe<Plan_Journey_Day_Stddev_Fields>;
  stddev_pop?: Maybe<Plan_Journey_Day_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plan_Journey_Day_Stddev_Samp_Fields>;
  sum?: Maybe<Plan_Journey_Day_Sum_Fields>;
  var_pop?: Maybe<Plan_Journey_Day_Var_Pop_Fields>;
  var_samp?: Maybe<Plan_Journey_Day_Var_Samp_Fields>;
  variance?: Maybe<Plan_Journey_Day_Variance_Fields>;
};


/** aggregate fields of "plan_journey_day" */
export type Plan_Journey_Day_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Plan_Journey_Day_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "plan_journey_day" */
export type Plan_Journey_Day_Aggregate_Order_By = {
  avg?: Maybe<Plan_Journey_Day_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Plan_Journey_Day_Max_Order_By>;
  min?: Maybe<Plan_Journey_Day_Min_Order_By>;
  stddev?: Maybe<Plan_Journey_Day_Stddev_Order_By>;
  stddev_pop?: Maybe<Plan_Journey_Day_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Plan_Journey_Day_Stddev_Samp_Order_By>;
  sum?: Maybe<Plan_Journey_Day_Sum_Order_By>;
  var_pop?: Maybe<Plan_Journey_Day_Var_Pop_Order_By>;
  var_samp?: Maybe<Plan_Journey_Day_Var_Samp_Order_By>;
  variance?: Maybe<Plan_Journey_Day_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "plan_journey_day" */
export type Plan_Journey_Day_Arr_Rel_Insert_Input = {
  data: Array<Plan_Journey_Day_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Plan_Journey_Day_On_Conflict>;
};

/** aggregate avg on columns */
export type Plan_Journey_Day_Avg_Fields = {
  __typename?: 'plan_journey_day_avg_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_journey_day_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Avg_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "plan_journey_day". All fields are combined with a logical 'AND'. */
export type Plan_Journey_Day_Bool_Exp = {
  _and?: Maybe<Array<Plan_Journey_Day_Bool_Exp>>;
  _not?: Maybe<Plan_Journey_Day_Bool_Exp>;
  _or?: Maybe<Array<Plan_Journey_Day_Bool_Exp>>;
  completed?: Maybe<Boolean_Comparison_Exp>;
  completed_date?: Maybe<Timestamptz_Comparison_Exp>;
  plan_day?: Maybe<Plan_Day_Bool_Exp>;
  plan_day_id?: Maybe<Int_Comparison_Exp>;
  plan_journey?: Maybe<Plan_Journey_Bool_Exp>;
  plan_journey_day_id?: Maybe<Int_Comparison_Exp>;
  plan_journey_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "plan_journey_day" */
export enum Plan_Journey_Day_Constraint {
  /** unique or primary key constraint */
  PlanJourneyDayPkey = 'plan_journey_day_pkey'
}

/** input type for incrementing numeric columns in table "plan_journey_day" */
export type Plan_Journey_Day_Inc_Input = {
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_journey_day_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "plan_journey_day" */
export type Plan_Journey_Day_Insert_Input = {
  completed?: Maybe<Scalars['Boolean']>;
  completed_date?: Maybe<Scalars['timestamptz']>;
  plan_day?: Maybe<Plan_Day_Obj_Rel_Insert_Input>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_journey?: Maybe<Plan_Journey_Obj_Rel_Insert_Input>;
  plan_journey_day_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Plan_Journey_Day_Max_Fields = {
  __typename?: 'plan_journey_day_max_fields';
  completed_date?: Maybe<Scalars['timestamptz']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_journey_day_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Max_Order_By = {
  completed_date?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Plan_Journey_Day_Min_Fields = {
  __typename?: 'plan_journey_day_min_fields';
  completed_date?: Maybe<Scalars['timestamptz']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_journey_day_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Min_Order_By = {
  completed_date?: Maybe<Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "plan_journey_day" */
export type Plan_Journey_Day_Mutation_Response = {
  __typename?: 'plan_journey_day_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Plan_Journey_Day>;
};

/** on conflict condition type for table "plan_journey_day" */
export type Plan_Journey_Day_On_Conflict = {
  constraint: Plan_Journey_Day_Constraint;
  update_columns?: Array<Plan_Journey_Day_Update_Column>;
  where?: Maybe<Plan_Journey_Day_Bool_Exp>;
};

/** Ordering options when selecting data from "plan_journey_day". */
export type Plan_Journey_Day_Order_By = {
  completed?: Maybe<Order_By>;
  completed_date?: Maybe<Order_By>;
  plan_day?: Maybe<Plan_Day_Order_By>;
  plan_day_id?: Maybe<Order_By>;
  plan_journey?: Maybe<Plan_Journey_Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** primary key columns input for table: plan_journey_day */
export type Plan_Journey_Day_Pk_Columns_Input = {
  plan_journey_day_id: Scalars['Int'];
};

/** select columns of table "plan_journey_day" */
export enum Plan_Journey_Day_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CompletedDate = 'completed_date',
  /** column name */
  PlanDayId = 'plan_day_id',
  /** column name */
  PlanJourneyDayId = 'plan_journey_day_id',
  /** column name */
  PlanJourneyId = 'plan_journey_id'
}

/** input type for updating data in table "plan_journey_day" */
export type Plan_Journey_Day_Set_Input = {
  completed?: Maybe<Scalars['Boolean']>;
  completed_date?: Maybe<Scalars['timestamptz']>;
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_journey_day_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Plan_Journey_Day_Stddev_Fields = {
  __typename?: 'plan_journey_day_stddev_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_journey_day_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Stddev_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Plan_Journey_Day_Stddev_Pop_Fields = {
  __typename?: 'plan_journey_day_stddev_pop_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_journey_day_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Stddev_Pop_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Plan_Journey_Day_Stddev_Samp_Fields = {
  __typename?: 'plan_journey_day_stddev_samp_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_journey_day_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Stddev_Samp_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Plan_Journey_Day_Sum_Fields = {
  __typename?: 'plan_journey_day_sum_fields';
  plan_day_id?: Maybe<Scalars['Int']>;
  plan_journey_day_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Sum_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** update columns of table "plan_journey_day" */
export enum Plan_Journey_Day_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CompletedDate = 'completed_date',
  /** column name */
  PlanDayId = 'plan_day_id',
  /** column name */
  PlanJourneyDayId = 'plan_journey_day_id',
  /** column name */
  PlanJourneyId = 'plan_journey_id'
}

/** aggregate var_pop on columns */
export type Plan_Journey_Day_Var_Pop_Fields = {
  __typename?: 'plan_journey_day_var_pop_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_journey_day_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Var_Pop_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Plan_Journey_Day_Var_Samp_Fields = {
  __typename?: 'plan_journey_day_var_samp_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_journey_day_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Var_Samp_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Plan_Journey_Day_Variance_Fields = {
  __typename?: 'plan_journey_day_variance_fields';
  plan_day_id?: Maybe<Scalars['Float']>;
  plan_journey_day_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "plan_journey_day" */
export type Plan_Journey_Day_Variance_Order_By = {
  plan_day_id?: Maybe<Order_By>;
  plan_journey_day_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** input type for incrementing numeric columns in table "plan_journey" */
export type Plan_Journey_Inc_Input = {
  plan_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "plan_journey" */
export type Plan_Journey_Insert_Input = {
  plan?: Maybe<Plan_Obj_Rel_Insert_Input>;
  plan_id?: Maybe<Scalars['Int']>;
  plan_journey_days?: Maybe<Plan_Journey_Day_Arr_Rel_Insert_Input>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Plan_Journey_Max_Fields = {
  __typename?: 'plan_journey_max_fields';
  plan_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "plan_journey" */
export type Plan_Journey_Max_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Plan_Journey_Min_Fields = {
  __typename?: 'plan_journey_min_fields';
  plan_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "plan_journey" */
export type Plan_Journey_Min_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "plan_journey" */
export type Plan_Journey_Mutation_Response = {
  __typename?: 'plan_journey_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Plan_Journey>;
};

/** input type for inserting object relation for remote table "plan_journey" */
export type Plan_Journey_Obj_Rel_Insert_Input = {
  data: Plan_Journey_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Plan_Journey_On_Conflict>;
};

/** on conflict condition type for table "plan_journey" */
export type Plan_Journey_On_Conflict = {
  constraint: Plan_Journey_Constraint;
  update_columns?: Array<Plan_Journey_Update_Column>;
  where?: Maybe<Plan_Journey_Bool_Exp>;
};

/** Ordering options when selecting data from "plan_journey". */
export type Plan_Journey_Order_By = {
  plan?: Maybe<Plan_Order_By>;
  plan_id?: Maybe<Order_By>;
  plan_journey_days_aggregate?: Maybe<Plan_Journey_Day_Aggregate_Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** primary key columns input for table: plan_journey */
export type Plan_Journey_Pk_Columns_Input = {
  plan_journey_id: Scalars['Int'];
};

/** select columns of table "plan_journey" */
export enum Plan_Journey_Select_Column {
  /** column name */
  PlanId = 'plan_id',
  /** column name */
  PlanJourneyId = 'plan_journey_id'
}

/** input type for updating data in table "plan_journey" */
export type Plan_Journey_Set_Input = {
  plan_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Plan_Journey_Stddev_Fields = {
  __typename?: 'plan_journey_stddev_fields';
  plan_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "plan_journey" */
export type Plan_Journey_Stddev_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Plan_Journey_Stddev_Pop_Fields = {
  __typename?: 'plan_journey_stddev_pop_fields';
  plan_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "plan_journey" */
export type Plan_Journey_Stddev_Pop_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Plan_Journey_Stddev_Samp_Fields = {
  __typename?: 'plan_journey_stddev_samp_fields';
  plan_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "plan_journey" */
export type Plan_Journey_Stddev_Samp_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Plan_Journey_Sum_Fields = {
  __typename?: 'plan_journey_sum_fields';
  plan_id?: Maybe<Scalars['Int']>;
  plan_journey_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "plan_journey" */
export type Plan_Journey_Sum_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** update columns of table "plan_journey" */
export enum Plan_Journey_Update_Column {
  /** column name */
  PlanId = 'plan_id',
  /** column name */
  PlanJourneyId = 'plan_journey_id'
}

/** aggregate var_pop on columns */
export type Plan_Journey_Var_Pop_Fields = {
  __typename?: 'plan_journey_var_pop_fields';
  plan_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "plan_journey" */
export type Plan_Journey_Var_Pop_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Plan_Journey_Var_Samp_Fields = {
  __typename?: 'plan_journey_var_samp_fields';
  plan_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "plan_journey" */
export type Plan_Journey_Var_Samp_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Plan_Journey_Variance_Fields = {
  __typename?: 'plan_journey_variance_fields';
  plan_id?: Maybe<Scalars['Float']>;
  plan_journey_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "plan_journey" */
export type Plan_Journey_Variance_Order_By = {
  plan_id?: Maybe<Order_By>;
  plan_journey_id?: Maybe<Order_By>;
};

/** aggregate max on columns */
export type Plan_Max_Fields = {
  __typename?: 'plan_max_fields';
  name?: Maybe<Scalars['String']>;
  plan_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Plan_Min_Fields = {
  __typename?: 'plan_min_fields';
  name?: Maybe<Scalars['String']>;
  plan_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "plan" */
export type Plan_Mutation_Response = {
  __typename?: 'plan_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Plan>;
};

/** input type for inserting object relation for remote table "plan" */
export type Plan_Obj_Rel_Insert_Input = {
  data: Plan_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Plan_On_Conflict>;
};

/** on conflict condition type for table "plan" */
export type Plan_On_Conflict = {
  constraint: Plan_Constraint;
  update_columns?: Array<Plan_Update_Column>;
  where?: Maybe<Plan_Bool_Exp>;
};

/** Ordering options when selecting data from "plan". */
export type Plan_Order_By = {
  name?: Maybe<Order_By>;
  plan_days_aggregate?: Maybe<Plan_Day_Aggregate_Order_By>;
  plan_id?: Maybe<Order_By>;
  plan_journeys_aggregate?: Maybe<Plan_Journey_Aggregate_Order_By>;
};

/** primary key columns input for table: plan */
export type Plan_Pk_Columns_Input = {
  plan_id: Scalars['Int'];
};

/** select columns of table "plan" */
export enum Plan_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  PlanId = 'plan_id'
}

/** input type for updating data in table "plan" */
export type Plan_Set_Input = {
  name?: Maybe<Scalars['String']>;
  plan_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Plan_Stddev_Fields = {
  __typename?: 'plan_stddev_fields';
  plan_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Plan_Stddev_Pop_Fields = {
  __typename?: 'plan_stddev_pop_fields';
  plan_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Plan_Stddev_Samp_Fields = {
  __typename?: 'plan_stddev_samp_fields';
  plan_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Plan_Sum_Fields = {
  __typename?: 'plan_sum_fields';
  plan_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "plan" */
export enum Plan_Update_Column {
  /** column name */
  Name = 'name',
  /** column name */
  PlanId = 'plan_id'
}

/** aggregate var_pop on columns */
export type Plan_Var_Pop_Fields = {
  __typename?: 'plan_var_pop_fields';
  plan_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Plan_Var_Samp_Fields = {
  __typename?: 'plan_var_samp_fields';
  plan_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Plan_Variance_Fields = {
  __typename?: 'plan_variance_fields';
  plan_id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "plan" */
  plan: Array<Plan>;
  /** fetch aggregated fields from the table: "plan" */
  plan_aggregate: Plan_Aggregate;
  /** fetch data from the table: "plan" using primary key columns */
  plan_by_pk?: Maybe<Plan>;
  /** fetch data from the table: "plan_day" */
  plan_day: Array<Plan_Day>;
  /** fetch aggregated fields from the table: "plan_day" */
  plan_day_aggregate: Plan_Day_Aggregate;
  /** fetch data from the table: "plan_day" using primary key columns */
  plan_day_by_pk?: Maybe<Plan_Day>;
  /** fetch data from the table: "plan_day_passage" */
  plan_day_passage: Array<Plan_Day_Passage>;
  /** fetch aggregated fields from the table: "plan_day_passage" */
  plan_day_passage_aggregate: Plan_Day_Passage_Aggregate;
  /** fetch data from the table: "plan_day_passage" using primary key columns */
  plan_day_passage_by_pk?: Maybe<Plan_Day_Passage>;
  /** fetch data from the table: "plan_journey" */
  plan_journey: Array<Plan_Journey>;
  /** fetch aggregated fields from the table: "plan_journey" */
  plan_journey_aggregate: Plan_Journey_Aggregate;
  /** fetch data from the table: "plan_journey" using primary key columns */
  plan_journey_by_pk?: Maybe<Plan_Journey>;
  /** fetch data from the table: "plan_journey_day" */
  plan_journey_day: Array<Plan_Journey_Day>;
  /** fetch aggregated fields from the table: "plan_journey_day" */
  plan_journey_day_aggregate: Plan_Journey_Day_Aggregate;
  /** fetch data from the table: "plan_journey_day" using primary key columns */
  plan_journey_day_by_pk?: Maybe<Plan_Journey_Day>;
};


export type Query_RootPlanArgs = {
  distinct_on?: Maybe<Array<Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Order_By>>;
  where?: Maybe<Plan_Bool_Exp>;
};


export type Query_RootPlan_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Order_By>>;
  where?: Maybe<Plan_Bool_Exp>;
};


export type Query_RootPlan_By_PkArgs = {
  plan_id: Scalars['Int'];
};


export type Query_RootPlan_DayArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Order_By>>;
  where?: Maybe<Plan_Day_Bool_Exp>;
};


export type Query_RootPlan_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Order_By>>;
  where?: Maybe<Plan_Day_Bool_Exp>;
};


export type Query_RootPlan_Day_By_PkArgs = {
  plan_day_id: Scalars['Int'];
};


export type Query_RootPlan_Day_PassageArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Passage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Passage_Order_By>>;
  where?: Maybe<Plan_Day_Passage_Bool_Exp>;
};


export type Query_RootPlan_Day_Passage_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Passage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Passage_Order_By>>;
  where?: Maybe<Plan_Day_Passage_Bool_Exp>;
};


export type Query_RootPlan_Day_Passage_By_PkArgs = {
  plan_day_passage_id: Scalars['Int'];
};


export type Query_RootPlan_JourneyArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Order_By>>;
  where?: Maybe<Plan_Journey_Bool_Exp>;
};


export type Query_RootPlan_Journey_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Order_By>>;
  where?: Maybe<Plan_Journey_Bool_Exp>;
};


export type Query_RootPlan_Journey_By_PkArgs = {
  plan_journey_id: Scalars['Int'];
};


export type Query_RootPlan_Journey_DayArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Day_Order_By>>;
  where?: Maybe<Plan_Journey_Day_Bool_Exp>;
};


export type Query_RootPlan_Journey_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Day_Order_By>>;
  where?: Maybe<Plan_Journey_Day_Bool_Exp>;
};


export type Query_RootPlan_Journey_Day_By_PkArgs = {
  plan_journey_day_id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "plan" */
  plan: Array<Plan>;
  /** fetch aggregated fields from the table: "plan" */
  plan_aggregate: Plan_Aggregate;
  /** fetch data from the table: "plan" using primary key columns */
  plan_by_pk?: Maybe<Plan>;
  /** fetch data from the table: "plan_day" */
  plan_day: Array<Plan_Day>;
  /** fetch aggregated fields from the table: "plan_day" */
  plan_day_aggregate: Plan_Day_Aggregate;
  /** fetch data from the table: "plan_day" using primary key columns */
  plan_day_by_pk?: Maybe<Plan_Day>;
  /** fetch data from the table: "plan_day_passage" */
  plan_day_passage: Array<Plan_Day_Passage>;
  /** fetch aggregated fields from the table: "plan_day_passage" */
  plan_day_passage_aggregate: Plan_Day_Passage_Aggregate;
  /** fetch data from the table: "plan_day_passage" using primary key columns */
  plan_day_passage_by_pk?: Maybe<Plan_Day_Passage>;
  /** fetch data from the table: "plan_journey" */
  plan_journey: Array<Plan_Journey>;
  /** fetch aggregated fields from the table: "plan_journey" */
  plan_journey_aggregate: Plan_Journey_Aggregate;
  /** fetch data from the table: "plan_journey" using primary key columns */
  plan_journey_by_pk?: Maybe<Plan_Journey>;
  /** fetch data from the table: "plan_journey_day" */
  plan_journey_day: Array<Plan_Journey_Day>;
  /** fetch aggregated fields from the table: "plan_journey_day" */
  plan_journey_day_aggregate: Plan_Journey_Day_Aggregate;
  /** fetch data from the table: "plan_journey_day" using primary key columns */
  plan_journey_day_by_pk?: Maybe<Plan_Journey_Day>;
};


export type Subscription_RootPlanArgs = {
  distinct_on?: Maybe<Array<Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Order_By>>;
  where?: Maybe<Plan_Bool_Exp>;
};


export type Subscription_RootPlan_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Order_By>>;
  where?: Maybe<Plan_Bool_Exp>;
};


export type Subscription_RootPlan_By_PkArgs = {
  plan_id: Scalars['Int'];
};


export type Subscription_RootPlan_DayArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Order_By>>;
  where?: Maybe<Plan_Day_Bool_Exp>;
};


export type Subscription_RootPlan_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Order_By>>;
  where?: Maybe<Plan_Day_Bool_Exp>;
};


export type Subscription_RootPlan_Day_By_PkArgs = {
  plan_day_id: Scalars['Int'];
};


export type Subscription_RootPlan_Day_PassageArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Passage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Passage_Order_By>>;
  where?: Maybe<Plan_Day_Passage_Bool_Exp>;
};


export type Subscription_RootPlan_Day_Passage_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Day_Passage_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Day_Passage_Order_By>>;
  where?: Maybe<Plan_Day_Passage_Bool_Exp>;
};


export type Subscription_RootPlan_Day_Passage_By_PkArgs = {
  plan_day_passage_id: Scalars['Int'];
};


export type Subscription_RootPlan_JourneyArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Order_By>>;
  where?: Maybe<Plan_Journey_Bool_Exp>;
};


export type Subscription_RootPlan_Journey_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Order_By>>;
  where?: Maybe<Plan_Journey_Bool_Exp>;
};


export type Subscription_RootPlan_Journey_By_PkArgs = {
  plan_journey_id: Scalars['Int'];
};


export type Subscription_RootPlan_Journey_DayArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Day_Order_By>>;
  where?: Maybe<Plan_Journey_Day_Bool_Exp>;
};


export type Subscription_RootPlan_Journey_Day_AggregateArgs = {
  distinct_on?: Maybe<Array<Plan_Journey_Day_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plan_Journey_Day_Order_By>>;
  where?: Maybe<Plan_Journey_Day_Bool_Exp>;
};


export type Subscription_RootPlan_Journey_Day_By_PkArgs = {
  plan_journey_day_id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type BeginJourneyMutationVariables = Exact<{
  plan_id: Scalars['Int'];
}>;


export type BeginJourneyMutation = { __typename?: 'mutation_root', insert_plan_journey_one?: { __typename?: 'plan_journey', plan_journey_id: number, plan: { __typename?: 'plan', plan_days: Array<{ __typename?: 'plan_day', plan_day_id: number }> } } | null | undefined };

export type CompleteDayMutationVariables = Exact<{
  plan_journey_day_id: Scalars['Int'];
  completed_date: Scalars['timestamptz'];
}>;


export type CompleteDayMutation = { __typename?: 'mutation_root', plan_journey_day?: { __typename?: 'plan_journey_day', plan_journey_day_id: number, completed: boolean, completed_date?: string | null | undefined } | null | undefined };

export type LoadJourneyQueryVariables = Exact<{
  plan_journey_id: Scalars['Int'];
}>;


export type LoadJourneyQuery = { __typename?: 'query_root', plan_journey?: { __typename?: 'plan_journey', plan_id: number, plan: { __typename?: 'plan', name: string }, plan_journey_days: Array<{ __typename?: 'plan_journey_day', plan_journey_day_id: number, completed: boolean, completed_date?: string | null | undefined, plan_day: { __typename?: 'plan_day', plan_day_id: number, day: number, plan_day_passages: Array<{ __typename?: 'plan_day_passage', passage: string }> } }> } | null | undefined };

export type LoadJourneysQueryVariables = Exact<{ [key: string]: never; }>;


export type LoadJourneysQuery = { __typename?: 'query_root', plan_journey: Array<{ __typename?: 'plan_journey', plan_journey_id: number, plan: { __typename?: 'plan', name: string, plan_days_aggregate: { __typename?: 'plan_day_aggregate', aggregate?: { __typename?: 'plan_day_aggregate_fields', count: number } | null | undefined } }, plan_journey_days_aggregate: { __typename?: 'plan_journey_day_aggregate', aggregate?: { __typename?: 'plan_journey_day_aggregate_fields', count: number, min?: { __typename?: 'plan_journey_day_min_fields', completed_date?: string | null | undefined } | null | undefined } | null | undefined } }> };

export type LoadPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type LoadPlansQuery = { __typename?: 'query_root', plan: Array<{ __typename?: 'plan', plan_id: number, name: string, plan_days_aggregate: { __typename?: 'plan_day_aggregate', aggregate?: { __typename?: 'plan_day_aggregate_fields', count: number } | null | undefined }, plan_journeys_aggregate: { __typename?: 'plan_journey_aggregate', aggregate?: { __typename?: 'plan_journey_aggregate_fields', count: number } | null | undefined } }> };

export type UncompleteDayMutationVariables = Exact<{
  plan_journey_day_id: Scalars['Int'];
}>;


export type UncompleteDayMutation = { __typename?: 'mutation_root', plan_journey_day?: { __typename?: 'plan_journey_day', plan_journey_day_id: number, completed: boolean, completed_date?: string | null | undefined } | null | undefined };


export const BeginJourneyDocument = gql`
    mutation BeginJourney($plan_id: Int!) {
  insert_plan_journey_one(object: {plan_id: $plan_id}) {
    plan_journey_id
    plan {
      plan_days {
        plan_day_id
      }
    }
  }
}
    `;

export function useBeginJourneyMutation() {
  return Urql.useMutation<BeginJourneyMutation, BeginJourneyMutationVariables>(BeginJourneyDocument);
};
export const CompleteDayDocument = gql`
    mutation CompleteDay($plan_journey_day_id: Int!, $completed_date: timestamptz!) {
  plan_journey_day: update_plan_journey_day_by_pk(
    pk_columns: {plan_journey_day_id: $plan_journey_day_id}
    _set: {completed: true, completed_date: $completed_date}
  ) {
    plan_journey_day_id
    completed
    completed_date
  }
}
    `;

export function useCompleteDayMutation() {
  return Urql.useMutation<CompleteDayMutation, CompleteDayMutationVariables>(CompleteDayDocument);
};
export const LoadJourneyDocument = gql`
    query LoadJourney($plan_journey_id: Int!) {
  plan_journey: plan_journey_by_pk(plan_journey_id: $plan_journey_id) {
    plan_id
    plan {
      name
    }
    plan_journey_days(order_by: [{plan_day: {day: asc}}]) {
      plan_journey_day_id
      plan_day {
        plan_day_id
        day
        plan_day_passages {
          passage
        }
      }
      completed
      completed_date
    }
  }
}
    `;

export function useLoadJourneyQuery(options: Omit<Urql.UseQueryArgs<LoadJourneyQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<LoadJourneyQuery>({ query: LoadJourneyDocument, ...options });
};
export const LoadJourneysDocument = gql`
    query LoadJourneys {
  plan_journey {
    plan_journey_id
    plan {
      name
      plan_days_aggregate {
        aggregate {
          count
        }
      }
    }
    plan_journey_days_aggregate(where: {completed: {_eq: true}}) {
      aggregate {
        count
        min {
          completed_date
        }
      }
    }
  }
}
    `;

export function useLoadJourneysQuery(options: Omit<Urql.UseQueryArgs<LoadJourneysQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<LoadJourneysQuery>({ query: LoadJourneysDocument, ...options });
};
export const LoadPlansDocument = gql`
    query LoadPlans {
  plan {
    plan_id
    name
    plan_days_aggregate {
      aggregate {
        count
      }
    }
    plan_journeys_aggregate {
      aggregate {
        count
      }
    }
  }
}
    `;

export function useLoadPlansQuery(options: Omit<Urql.UseQueryArgs<LoadPlansQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<LoadPlansQuery>({ query: LoadPlansDocument, ...options });
};
export const UncompleteDayDocument = gql`
    mutation UncompleteDay($plan_journey_day_id: Int!) {
  plan_journey_day: update_plan_journey_day_by_pk(
    pk_columns: {plan_journey_day_id: $plan_journey_day_id}
    _set: {completed: false, completed_date: null}
  ) {
    plan_journey_day_id
    completed
    completed_date
  }
}
    `;

export function useUncompleteDayMutation() {
  return Urql.useMutation<UncompleteDayMutation, UncompleteDayMutationVariables>(UncompleteDayDocument);
};