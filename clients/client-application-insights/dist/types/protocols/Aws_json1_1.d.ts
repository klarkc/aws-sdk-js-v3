import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "../commands/CreateApplicationCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "../commands/CreateComponentCommand";
import { CreateLogPatternCommandInput, CreateLogPatternCommandOutput } from "../commands/CreateLogPatternCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "../commands/DeleteApplicationCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import { DeleteLogPatternCommandInput, DeleteLogPatternCommandOutput } from "../commands/DeleteLogPatternCommand";
import {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "../commands/DescribeApplicationCommand";
import { DescribeComponentCommandInput, DescribeComponentCommandOutput } from "../commands/DescribeComponentCommand";
import {
  DescribeComponentConfigurationCommandInput,
  DescribeComponentConfigurationCommandOutput,
} from "../commands/DescribeComponentConfigurationCommand";
import {
  DescribeComponentConfigurationRecommendationCommandInput,
  DescribeComponentConfigurationRecommendationCommandOutput,
} from "../commands/DescribeComponentConfigurationRecommendationCommand";
import { DescribeLogPatternCommandInput, DescribeLogPatternCommandOutput } from "../commands/DescribeLogPatternCommand";
import {
  DescribeObservationCommandInput,
  DescribeObservationCommandOutput,
} from "../commands/DescribeObservationCommand";
import { DescribeProblemCommandInput, DescribeProblemCommandOutput } from "../commands/DescribeProblemCommand";
import {
  DescribeProblemObservationsCommandInput,
  DescribeProblemObservationsCommandOutput,
} from "../commands/DescribeProblemObservationsCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "../commands/ListApplicationsCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import {
  ListConfigurationHistoryCommandInput,
  ListConfigurationHistoryCommandOutput,
} from "../commands/ListConfigurationHistoryCommand";
import { ListLogPatternSetsCommandInput, ListLogPatternSetsCommandOutput } from "../commands/ListLogPatternSetsCommand";
import { ListLogPatternsCommandInput, ListLogPatternsCommandOutput } from "../commands/ListLogPatternsCommand";
import { ListProblemsCommandInput, ListProblemsCommandOutput } from "../commands/ListProblemsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "../commands/UpdateApplicationCommand";
import { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "../commands/UpdateComponentCommand";
import {
  UpdateComponentConfigurationCommandInput,
  UpdateComponentConfigurationCommandOutput,
} from "../commands/UpdateComponentConfigurationCommand";
import { UpdateLogPatternCommandInput, UpdateLogPatternCommandOutput } from "../commands/UpdateLogPatternCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_json1_1CreateApplicationCommand: (
  input: CreateApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateComponentCommand: (
  input: CreateComponentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1CreateLogPatternCommand: (
  input: CreateLogPatternCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteApplicationCommand: (
  input: DeleteApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteComponentCommand: (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DeleteLogPatternCommand: (
  input: DeleteLogPatternCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeApplicationCommand: (
  input: DescribeApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeComponentCommand: (
  input: DescribeComponentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeComponentConfigurationCommand: (
  input: DescribeComponentConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeComponentConfigurationRecommendationCommand: (
  input: DescribeComponentConfigurationRecommendationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeLogPatternCommand: (
  input: DescribeLogPatternCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeObservationCommand: (
  input: DescribeObservationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeProblemCommand: (
  input: DescribeProblemCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1DescribeProblemObservationsCommand: (
  input: DescribeProblemObservationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListApplicationsCommand: (
  input: ListApplicationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListComponentsCommand: (
  input: ListComponentsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListConfigurationHistoryCommand: (
  input: ListConfigurationHistoryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListLogPatternsCommand: (
  input: ListLogPatternsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListLogPatternSetsCommand: (
  input: ListLogPatternSetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListProblemsCommand: (
  input: ListProblemsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1ListTagsForResourceCommand: (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1TagResourceCommand: (
  input: TagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UntagResourceCommand: (
  input: UntagResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateApplicationCommand: (
  input: UpdateApplicationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateComponentCommand: (
  input: UpdateComponentCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateComponentConfigurationCommand: (
  input: UpdateComponentConfigurationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_json1_1UpdateLogPatternCommand: (
  input: UpdateLogPatternCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_json1_1CreateApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateApplicationCommandOutput>;
export declare const deserializeAws_json1_1CreateComponentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateComponentCommandOutput>;
export declare const deserializeAws_json1_1CreateLogPatternCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateLogPatternCommandOutput>;
export declare const deserializeAws_json1_1DeleteApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteApplicationCommandOutput>;
export declare const deserializeAws_json1_1DeleteComponentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteComponentCommandOutput>;
export declare const deserializeAws_json1_1DeleteLogPatternCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteLogPatternCommandOutput>;
export declare const deserializeAws_json1_1DescribeApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeApplicationCommandOutput>;
export declare const deserializeAws_json1_1DescribeComponentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeComponentCommandOutput>;
export declare const deserializeAws_json1_1DescribeComponentConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeComponentConfigurationCommandOutput>;
export declare const deserializeAws_json1_1DescribeComponentConfigurationRecommendationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeComponentConfigurationRecommendationCommandOutput>;
export declare const deserializeAws_json1_1DescribeLogPatternCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeLogPatternCommandOutput>;
export declare const deserializeAws_json1_1DescribeObservationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeObservationCommandOutput>;
export declare const deserializeAws_json1_1DescribeProblemCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeProblemCommandOutput>;
export declare const deserializeAws_json1_1DescribeProblemObservationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeProblemObservationsCommandOutput>;
export declare const deserializeAws_json1_1ListApplicationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListApplicationsCommandOutput>;
export declare const deserializeAws_json1_1ListComponentsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListComponentsCommandOutput>;
export declare const deserializeAws_json1_1ListConfigurationHistoryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListConfigurationHistoryCommandOutput>;
export declare const deserializeAws_json1_1ListLogPatternsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListLogPatternsCommandOutput>;
export declare const deserializeAws_json1_1ListLogPatternSetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListLogPatternSetsCommandOutput>;
export declare const deserializeAws_json1_1ListProblemsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListProblemsCommandOutput>;
export declare const deserializeAws_json1_1ListTagsForResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTagsForResourceCommandOutput>;
export declare const deserializeAws_json1_1TagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<TagResourceCommandOutput>;
export declare const deserializeAws_json1_1UntagResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UntagResourceCommandOutput>;
export declare const deserializeAws_json1_1UpdateApplicationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateApplicationCommandOutput>;
export declare const deserializeAws_json1_1UpdateComponentCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateComponentCommandOutput>;
export declare const deserializeAws_json1_1UpdateComponentConfigurationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateComponentConfigurationCommandOutput>;
export declare const deserializeAws_json1_1UpdateLogPatternCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateLogPatternCommandOutput>;
