import { AddNotificationChannelCommandInput, AddNotificationChannelCommandOutput } from "../commands/AddNotificationChannelCommand";
import { DescribeAccountHealthCommandInput, DescribeAccountHealthCommandOutput } from "../commands/DescribeAccountHealthCommand";
import { DescribeAccountOverviewCommandInput, DescribeAccountOverviewCommandOutput } from "../commands/DescribeAccountOverviewCommand";
import { DescribeAnomalyCommandInput, DescribeAnomalyCommandOutput } from "../commands/DescribeAnomalyCommand";
import { DescribeFeedbackCommandInput, DescribeFeedbackCommandOutput } from "../commands/DescribeFeedbackCommand";
import { DescribeInsightCommandInput, DescribeInsightCommandOutput } from "../commands/DescribeInsightCommand";
import { DescribeResourceCollectionHealthCommandInput, DescribeResourceCollectionHealthCommandOutput } from "../commands/DescribeResourceCollectionHealthCommand";
import { DescribeServiceIntegrationCommandInput, DescribeServiceIntegrationCommandOutput } from "../commands/DescribeServiceIntegrationCommand";
import { GetCostEstimationCommandInput, GetCostEstimationCommandOutput } from "../commands/GetCostEstimationCommand";
import { GetResourceCollectionCommandInput, GetResourceCollectionCommandOutput } from "../commands/GetResourceCollectionCommand";
import { ListAnomaliesForInsightCommandInput, ListAnomaliesForInsightCommandOutput } from "../commands/ListAnomaliesForInsightCommand";
import { ListEventsCommandInput, ListEventsCommandOutput } from "../commands/ListEventsCommand";
import { ListInsightsCommandInput, ListInsightsCommandOutput } from "../commands/ListInsightsCommand";
import { ListNotificationChannelsCommandInput, ListNotificationChannelsCommandOutput } from "../commands/ListNotificationChannelsCommand";
import { ListRecommendationsCommandInput, ListRecommendationsCommandOutput } from "../commands/ListRecommendationsCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "../commands/PutFeedbackCommand";
import { RemoveNotificationChannelCommandInput, RemoveNotificationChannelCommandOutput } from "../commands/RemoveNotificationChannelCommand";
import { SearchInsightsCommandInput, SearchInsightsCommandOutput } from "../commands/SearchInsightsCommand";
import { StartCostEstimationCommandInput, StartCostEstimationCommandOutput } from "../commands/StartCostEstimationCommand";
import { UpdateResourceCollectionCommandInput, UpdateResourceCollectionCommandOutput } from "../commands/UpdateResourceCollectionCommand";
import { UpdateServiceIntegrationCommandInput, UpdateServiceIntegrationCommandOutput } from "../commands/UpdateServiceIntegrationCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_restJson1AddNotificationChannelCommand: (input: AddNotificationChannelCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeAccountHealthCommand: (input: DescribeAccountHealthCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeAccountOverviewCommand: (input: DescribeAccountOverviewCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeAnomalyCommand: (input: DescribeAnomalyCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeFeedbackCommand: (input: DescribeFeedbackCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeInsightCommand: (input: DescribeInsightCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeResourceCollectionHealthCommand: (input: DescribeResourceCollectionHealthCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1DescribeServiceIntegrationCommand: (input: DescribeServiceIntegrationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetCostEstimationCommand: (input: GetCostEstimationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1GetResourceCollectionCommand: (input: GetResourceCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListAnomaliesForInsightCommand: (input: ListAnomaliesForInsightCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListEventsCommand: (input: ListEventsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListInsightsCommand: (input: ListInsightsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListNotificationChannelsCommand: (input: ListNotificationChannelsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1ListRecommendationsCommand: (input: ListRecommendationsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1PutFeedbackCommand: (input: PutFeedbackCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1RemoveNotificationChannelCommand: (input: RemoveNotificationChannelCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1SearchInsightsCommand: (input: SearchInsightsCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1StartCostEstimationCommand: (input: StartCostEstimationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateResourceCollectionCommand: (input: UpdateResourceCollectionCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const serializeAws_restJson1UpdateServiceIntegrationCommand: (input: UpdateServiceIntegrationCommandInput, context: __SerdeContext) => Promise<__HttpRequest>;
export declare const deserializeAws_restJson1AddNotificationChannelCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<AddNotificationChannelCommandOutput>;
export declare const deserializeAws_restJson1DescribeAccountHealthCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeAccountHealthCommandOutput>;
export declare const deserializeAws_restJson1DescribeAccountOverviewCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeAccountOverviewCommandOutput>;
export declare const deserializeAws_restJson1DescribeAnomalyCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeAnomalyCommandOutput>;
export declare const deserializeAws_restJson1DescribeFeedbackCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeFeedbackCommandOutput>;
export declare const deserializeAws_restJson1DescribeInsightCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeInsightCommandOutput>;
export declare const deserializeAws_restJson1DescribeResourceCollectionHealthCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeResourceCollectionHealthCommandOutput>;
export declare const deserializeAws_restJson1DescribeServiceIntegrationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<DescribeServiceIntegrationCommandOutput>;
export declare const deserializeAws_restJson1GetCostEstimationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetCostEstimationCommandOutput>;
export declare const deserializeAws_restJson1GetResourceCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<GetResourceCollectionCommandOutput>;
export declare const deserializeAws_restJson1ListAnomaliesForInsightCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListAnomaliesForInsightCommandOutput>;
export declare const deserializeAws_restJson1ListEventsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListEventsCommandOutput>;
export declare const deserializeAws_restJson1ListInsightsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListInsightsCommandOutput>;
export declare const deserializeAws_restJson1ListNotificationChannelsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListNotificationChannelsCommandOutput>;
export declare const deserializeAws_restJson1ListRecommendationsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<ListRecommendationsCommandOutput>;
export declare const deserializeAws_restJson1PutFeedbackCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<PutFeedbackCommandOutput>;
export declare const deserializeAws_restJson1RemoveNotificationChannelCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<RemoveNotificationChannelCommandOutput>;
export declare const deserializeAws_restJson1SearchInsightsCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<SearchInsightsCommandOutput>;
export declare const deserializeAws_restJson1StartCostEstimationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<StartCostEstimationCommandOutput>;
export declare const deserializeAws_restJson1UpdateResourceCollectionCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateResourceCollectionCommandOutput>;
export declare const deserializeAws_restJson1UpdateServiceIntegrationCommand: (output: __HttpResponse, context: __SerdeContext) => Promise<UpdateServiceIntegrationCommandOutput>;
