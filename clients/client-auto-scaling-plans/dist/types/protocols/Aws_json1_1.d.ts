import { CreateScalingPlanCommandInput, CreateScalingPlanCommandOutput } from "../commands/CreateScalingPlanCommand";
import { DeleteScalingPlanCommandInput, DeleteScalingPlanCommandOutput } from "../commands/DeleteScalingPlanCommand";
import {
  DescribeScalingPlanResourcesCommandInput,
  DescribeScalingPlanResourcesCommandOutput,
} from "../commands/DescribeScalingPlanResourcesCommand";
import {
  DescribeScalingPlansCommandInput,
  DescribeScalingPlansCommandOutput,
} from "../commands/DescribeScalingPlansCommand";
import {
  GetScalingPlanResourceForecastDataCommandInput,
  GetScalingPlanResourceForecastDataCommandOutput,
} from "../commands/GetScalingPlanResourceForecastDataCommand";
import { UpdateScalingPlanCommandInput, UpdateScalingPlanCommandOutput } from "../commands/UpdateScalingPlanCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1CreateScalingPlanCommand: (
  input: CreateScalingPlanCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteScalingPlanCommand: (
  input: DeleteScalingPlanCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeScalingPlanResourcesCommand: (
  input: DescribeScalingPlanResourcesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeScalingPlansCommand: (
  input: DescribeScalingPlansCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1GetScalingPlanResourceForecastDataCommand: (
  input: GetScalingPlanResourceForecastDataCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateScalingPlanCommand: (
  input: UpdateScalingPlanCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1CreateScalingPlanCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateScalingPlanCommandOutput>;
export declare const deserializeAws_json1_1DeleteScalingPlanCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteScalingPlanCommandOutput>;
export declare const deserializeAws_json1_1DescribeScalingPlanResourcesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeScalingPlanResourcesCommandOutput>;
export declare const deserializeAws_json1_1DescribeScalingPlansCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeScalingPlansCommandOutput>;
export declare const deserializeAws_json1_1GetScalingPlanResourceForecastDataCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetScalingPlanResourceForecastDataCommandOutput>;
export declare const deserializeAws_json1_1UpdateScalingPlanCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateScalingPlanCommandOutput>;
