import { DevOpsGuruClient } from "./DevOpsGuruClient";
import { AddNotificationChannelCommandInput, AddNotificationChannelCommandOutput } from "./commands/AddNotificationChannelCommand";
import { DescribeAccountHealthCommandInput, DescribeAccountHealthCommandOutput } from "./commands/DescribeAccountHealthCommand";
import { DescribeAccountOverviewCommandInput, DescribeAccountOverviewCommandOutput } from "./commands/DescribeAccountOverviewCommand";
import { DescribeAnomalyCommandInput, DescribeAnomalyCommandOutput } from "./commands/DescribeAnomalyCommand";
import { DescribeFeedbackCommandInput, DescribeFeedbackCommandOutput } from "./commands/DescribeFeedbackCommand";
import { DescribeInsightCommandInput, DescribeInsightCommandOutput } from "./commands/DescribeInsightCommand";
import { DescribeResourceCollectionHealthCommandInput, DescribeResourceCollectionHealthCommandOutput } from "./commands/DescribeResourceCollectionHealthCommand";
import { DescribeServiceIntegrationCommandInput, DescribeServiceIntegrationCommandOutput } from "./commands/DescribeServiceIntegrationCommand";
import { GetCostEstimationCommandInput, GetCostEstimationCommandOutput } from "./commands/GetCostEstimationCommand";
import { GetResourceCollectionCommandInput, GetResourceCollectionCommandOutput } from "./commands/GetResourceCollectionCommand";
import { ListAnomaliesForInsightCommandInput, ListAnomaliesForInsightCommandOutput } from "./commands/ListAnomaliesForInsightCommand";
import { ListEventsCommandInput, ListEventsCommandOutput } from "./commands/ListEventsCommand";
import { ListInsightsCommandInput, ListInsightsCommandOutput } from "./commands/ListInsightsCommand";
import { ListNotificationChannelsCommandInput, ListNotificationChannelsCommandOutput } from "./commands/ListNotificationChannelsCommand";
import { ListRecommendationsCommandInput, ListRecommendationsCommandOutput } from "./commands/ListRecommendationsCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import { RemoveNotificationChannelCommandInput, RemoveNotificationChannelCommandOutput } from "./commands/RemoveNotificationChannelCommand";
import { SearchInsightsCommandInput, SearchInsightsCommandOutput } from "./commands/SearchInsightsCommand";
import { StartCostEstimationCommandInput, StartCostEstimationCommandOutput } from "./commands/StartCostEstimationCommand";
import { UpdateResourceCollectionCommandInput, UpdateResourceCollectionCommandOutput } from "./commands/UpdateResourceCollectionCommand";
import { UpdateServiceIntegrationCommandInput, UpdateServiceIntegrationCommandOutput } from "./commands/UpdateServiceIntegrationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p> Amazon DevOps Guru is a fully managed service that helps you identify anomalous behavior in business
 * 			critical operational applications. You specify the AWS resources that you want DevOps Guru to cover,
 * 			then the Amazon CloudWatch metrics and AWS CloudTrail events related to those resources are analyzed. When
 * 			anomalous behavior is detected, DevOps Guru creates an <i>insight</i> that includes
 * 			recommendations, related events, and related metrics that can help you improve your
 * 			operational applications. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html">What is Amazon DevOps Guru</a>. </p>
 *
 * 		       <p>
 * 			You can specify 1 or 2 Amazon Simple Notification Service topics so you are notified every time a new insight is created. You can also enable DevOps Guru to generate
 * 			an OpsItem in AWS Systems Manager for each insight to help you manage and track your work addressing insights.
 * 		</p>
 *
 * 		       <p>
 * 			To learn about the DevOps Guru workflow, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html#how-it-works">How DevOps Guru works</a>. To
 * 			learn about DevOps Guru concepts, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/concepts.html">Concepts in DevOps Guru</a>.
 * 		</p>
 */
export declare class DevOpsGuru extends DevOpsGuruClient {
    /**
     * <p>
     * 			Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated.
     * 		</p>
     *
     * 		       <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission
     * 				to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account.
     * 				For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions
     * 				for cross account Amazon SNS topics</a>.</p>
     * 				     <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions
     * 				to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for
     * 				AWS KMS–encrypted Amazon SNS topics</a>.</p>
     */
    addNotificationChannel(args: AddNotificationChannelCommandInput, options?: __HttpHandlerOptions): Promise<AddNotificationChannelCommandOutput>;
    addNotificationChannel(args: AddNotificationChannelCommandInput, cb: (err: any, data?: AddNotificationChannelCommandOutput) => void): void;
    addNotificationChannel(args: AddNotificationChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddNotificationChannelCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your AWS account.
     *    		Use these numbers to gauge the health of operations in your AWS account.
     *    	</p>
     */
    describeAccountHealth(args: DescribeAccountHealthCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountHealthCommandOutput>;
    describeAccountHealth(args: DescribeAccountHealthCommandInput, cb: (err: any, data?: DescribeAccountHealthCommandOutput) => void): void;
    describeAccountHealth(args: DescribeAccountHealthCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountHealthCommandOutput) => void): void;
    /**
     * <p>
     *    		For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights
     *    		that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights.
     *    	</p>
     */
    describeAccountOverview(args: DescribeAccountOverviewCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAccountOverviewCommandOutput>;
    describeAccountOverview(args: DescribeAccountOverviewCommandInput, cb: (err: any, data?: DescribeAccountOverviewCommandOutput) => void): void;
    describeAccountOverview(args: DescribeAccountOverviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAccountOverviewCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns details about an anomaly that you specify using its ID.
     *    	</p>
     */
    describeAnomaly(args: DescribeAnomalyCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAnomalyCommandOutput>;
    describeAnomaly(args: DescribeAnomalyCommandInput, cb: (err: any, data?: DescribeAnomalyCommandOutput) => void): void;
    describeAnomaly(args: DescribeAnomalyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAnomalyCommandOutput) => void): void;
    /**
     * <p>
     * 			Returns the most recent feedback submitted in the current AWS account and Region.
     * 		</p>
     */
    describeFeedback(args: DescribeFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFeedbackCommandOutput>;
    describeFeedback(args: DescribeFeedbackCommandInput, cb: (err: any, data?: DescribeFeedbackCommandOutput) => void): void;
    describeFeedback(args: DescribeFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFeedbackCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns details about an insight that you specify using its ID.
     *    	</p>
     */
    describeInsight(args: DescribeInsightCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInsightCommandOutput>;
    describeInsight(args: DescribeInsightCommandInput, cb: (err: any, data?: DescribeInsightCommandOutput) => void): void;
    describeInsight(args: DescribeInsightCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInsightCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in
     *    		resource collections in your account. You specify the type of AWS resources collection. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     *    	</p>
     */
    describeResourceCollectionHealth(args: DescribeResourceCollectionHealthCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourceCollectionHealthCommandOutput>;
    describeResourceCollectionHealth(args: DescribeResourceCollectionHealthCommandInput, cb: (err: any, data?: DescribeResourceCollectionHealthCommandOutput) => void): void;
    describeResourceCollectionHealth(args: DescribeResourceCollectionHealthCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourceCollectionHealthCommandOutput) => void): void;
    /**
     * <p>
     * 			Returns the integration status of services that are integrated with DevOps Guru.
     * 			The one service that can be integrated with DevOps Guru
     *       	is AWS Systems Manager, which can be used to create an OpsItem for each generated insight.
     * 		</p>
     */
    describeServiceIntegration(args: DescribeServiceIntegrationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServiceIntegrationCommandOutput>;
    describeServiceIntegration(args: DescribeServiceIntegrationCommandInput, cb: (err: any, data?: DescribeServiceIntegrationCommandOutput) => void): void;
    describeServiceIntegration(args: DescribeServiceIntegrationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServiceIntegrationCommandOutput) => void): void;
    /**
     * <p>Returns an estimate of the monthly cost for DevOps Guru to analyze your AWS resources.
     * 			For more information,
     * 			see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your
     * 			Amazon DevOps Guru costs</a> and
     * 			<a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.</p>
     */
    getCostEstimation(args: GetCostEstimationCommandInput, options?: __HttpHandlerOptions): Promise<GetCostEstimationCommandOutput>;
    getCostEstimation(args: GetCostEstimationCommandInput, cb: (err: any, data?: GetCostEstimationCommandOutput) => void): void;
    getCostEstimation(args: GetCostEstimationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCostEstimationCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns lists AWS resources that are of the specified resource collection type. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks.
     *    	</p>
     */
    getResourceCollection(args: GetResourceCollectionCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceCollectionCommandOutput>;
    getResourceCollection(args: GetResourceCollectionCommandInput, cb: (err: any, data?: GetResourceCollectionCommandOutput) => void): void;
    getResourceCollection(args: GetResourceCollectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetResourceCollectionCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns a list of the anomalies that belong to an insight that you specify using its ID.
     *    	</p>
     */
    listAnomaliesForInsight(args: ListAnomaliesForInsightCommandInput, options?: __HttpHandlerOptions): Promise<ListAnomaliesForInsightCommandOutput>;
    listAnomaliesForInsight(args: ListAnomaliesForInsightCommandInput, cb: (err: any, data?: ListAnomaliesForInsightCommandOutput) => void): void;
    listAnomaliesForInsight(args: ListAnomaliesForInsightCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAnomaliesForInsightCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned.
     *    	</p>
     */
    listEvents(args: ListEventsCommandInput, options?: __HttpHandlerOptions): Promise<ListEventsCommandOutput>;
    listEvents(args: ListEventsCommandInput, cb: (err: any, data?: ListEventsCommandOutput) => void): void;
    listEvents(args: ListEventsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEventsCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns a list of insights in your AWS account. You can specify which insights are returned by their start time and
     *    		status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>).
     *    	</p>
     */
    listInsights(args: ListInsightsCommandInput, options?: __HttpHandlerOptions): Promise<ListInsightsCommandOutput>;
    listInsights(args: ListInsightsCommandInput, cb: (err: any, data?: ListInsightsCommandOutput) => void): void;
    listInsights(args: ListInsightsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInsightsCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when
     *    		DevOps Guru generates an insight that contains information about how to improve your operations. The one
     *       	supported notification channel is Amazon Simple Notification Service (Amazon SNS).
     *    	</p>
     */
    listNotificationChannels(args: ListNotificationChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListNotificationChannelsCommandOutput>;
    listNotificationChannels(args: ListNotificationChannelsCommandInput, cb: (err: any, data?: ListNotificationChannelsCommandOutput) => void): void;
    listNotificationChannels(args: ListNotificationChannelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNotificationChannelsCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events.
     *    	</p>
     */
    listRecommendations(args: ListRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<ListRecommendationsCommandOutput>;
    listRecommendations(args: ListRecommendationsCommandInput, cb: (err: any, data?: ListRecommendationsCommandOutput) => void): void;
    listRecommendations(args: ListRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRecommendationsCommandOutput) => void): void;
    /**
     * <p>
     *    		Collects customer feedback about the specified insight.
     *    	</p>
     */
    putFeedback(args: PutFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<PutFeedbackCommandOutput>;
    putFeedback(args: PutFeedbackCommandInput, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
    putFeedback(args: PutFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutFeedbackCommandOutput) => void): void;
    /**
     * <p>
     *    		Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight
     *    		that contains information about how to improve your operations.
     *    	</p>
     */
    removeNotificationChannel(args: RemoveNotificationChannelCommandInput, options?: __HttpHandlerOptions): Promise<RemoveNotificationChannelCommandOutput>;
    removeNotificationChannel(args: RemoveNotificationChannelCommandInput, cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void): void;
    removeNotificationChannel(args: RemoveNotificationChannelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveNotificationChannelCommandOutput) => void): void;
    /**
     * <p>
     *    		Returns a list of insights in your AWS account. You can specify which insights are returned by their start time, one or more statuses
     *    		(<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>,
     *    		and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>).
     *    	</p>
     *    	     <p>
     *    		Use the <code>Filters</code> parameter to specify status and severity
     *    		search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search.
     *    	</p>
     */
    searchInsights(args: SearchInsightsCommandInput, options?: __HttpHandlerOptions): Promise<SearchInsightsCommandOutput>;
    searchInsights(args: SearchInsightsCommandInput, cb: (err: any, data?: SearchInsightsCommandOutput) => void): void;
    searchInsights(args: SearchInsightsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchInsightsCommandOutput) => void): void;
    /**
     * <p>Starts the creation of an estimate of the monthly cost to analyze your AWS resources.</p>
     */
    startCostEstimation(args: StartCostEstimationCommandInput, options?: __HttpHandlerOptions): Promise<StartCostEstimationCommandOutput>;
    startCostEstimation(args: StartCostEstimationCommandInput, cb: (err: any, data?: StartCostEstimationCommandOutput) => void): void;
    startCostEstimation(args: StartCostEstimationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartCostEstimationCommandOutput) => void): void;
    /**
     * <p> Updates the collection of resources that DevOps Guru analyzes.
     * 			The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze
     *       	only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. This method also creates the IAM role required for you
     * 			to use DevOps Guru. </p>
     */
    updateResourceCollection(args: UpdateResourceCollectionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateResourceCollectionCommandOutput>;
    updateResourceCollection(args: UpdateResourceCollectionCommandInput, cb: (err: any, data?: UpdateResourceCollectionCommandOutput) => void): void;
    updateResourceCollection(args: UpdateResourceCollectionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateResourceCollectionCommandOutput) => void): void;
    /**
     * <p>
     * 			Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with
     * 			DevOps Guru is AWS Systems Manager, which can be used to create an OpsItem for each generated insight.
     * 		</p>
     */
    updateServiceIntegration(args: UpdateServiceIntegrationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceIntegrationCommandOutput>;
    updateServiceIntegration(args: UpdateServiceIntegrationCommandInput, cb: (err: any, data?: UpdateServiceIntegrationCommandOutput) => void): void;
    updateServiceIntegration(args: UpdateServiceIntegrationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServiceIntegrationCommandOutput) => void): void;
}
