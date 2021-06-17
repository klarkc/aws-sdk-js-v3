import { CostExplorerClient } from "./CostExplorerClient";
import { CreateAnomalyMonitorCommandInput, CreateAnomalyMonitorCommandOutput } from "./commands/CreateAnomalyMonitorCommand";
import { CreateAnomalySubscriptionCommandInput, CreateAnomalySubscriptionCommandOutput } from "./commands/CreateAnomalySubscriptionCommand";
import { CreateCostCategoryDefinitionCommandInput, CreateCostCategoryDefinitionCommandOutput } from "./commands/CreateCostCategoryDefinitionCommand";
import { DeleteAnomalyMonitorCommandInput, DeleteAnomalyMonitorCommandOutput } from "./commands/DeleteAnomalyMonitorCommand";
import { DeleteAnomalySubscriptionCommandInput, DeleteAnomalySubscriptionCommandOutput } from "./commands/DeleteAnomalySubscriptionCommand";
import { DeleteCostCategoryDefinitionCommandInput, DeleteCostCategoryDefinitionCommandOutput } from "./commands/DeleteCostCategoryDefinitionCommand";
import { DescribeCostCategoryDefinitionCommandInput, DescribeCostCategoryDefinitionCommandOutput } from "./commands/DescribeCostCategoryDefinitionCommand";
import { GetAnomaliesCommandInput, GetAnomaliesCommandOutput } from "./commands/GetAnomaliesCommand";
import { GetAnomalyMonitorsCommandInput, GetAnomalyMonitorsCommandOutput } from "./commands/GetAnomalyMonitorsCommand";
import { GetAnomalySubscriptionsCommandInput, GetAnomalySubscriptionsCommandOutput } from "./commands/GetAnomalySubscriptionsCommand";
import { GetCostAndUsageCommandInput, GetCostAndUsageCommandOutput } from "./commands/GetCostAndUsageCommand";
import { GetCostAndUsageWithResourcesCommandInput, GetCostAndUsageWithResourcesCommandOutput } from "./commands/GetCostAndUsageWithResourcesCommand";
import { GetCostCategoriesCommandInput, GetCostCategoriesCommandOutput } from "./commands/GetCostCategoriesCommand";
import { GetCostForecastCommandInput, GetCostForecastCommandOutput } from "./commands/GetCostForecastCommand";
import { GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput } from "./commands/GetDimensionValuesCommand";
import { GetReservationCoverageCommandInput, GetReservationCoverageCommandOutput } from "./commands/GetReservationCoverageCommand";
import { GetReservationPurchaseRecommendationCommandInput, GetReservationPurchaseRecommendationCommandOutput } from "./commands/GetReservationPurchaseRecommendationCommand";
import { GetReservationUtilizationCommandInput, GetReservationUtilizationCommandOutput } from "./commands/GetReservationUtilizationCommand";
import { GetRightsizingRecommendationCommandInput, GetRightsizingRecommendationCommandOutput } from "./commands/GetRightsizingRecommendationCommand";
import { GetSavingsPlansCoverageCommandInput, GetSavingsPlansCoverageCommandOutput } from "./commands/GetSavingsPlansCoverageCommand";
import { GetSavingsPlansPurchaseRecommendationCommandInput, GetSavingsPlansPurchaseRecommendationCommandOutput } from "./commands/GetSavingsPlansPurchaseRecommendationCommand";
import { GetSavingsPlansUtilizationCommandInput, GetSavingsPlansUtilizationCommandOutput } from "./commands/GetSavingsPlansUtilizationCommand";
import { GetSavingsPlansUtilizationDetailsCommandInput, GetSavingsPlansUtilizationDetailsCommandOutput } from "./commands/GetSavingsPlansUtilizationDetailsCommand";
import { GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetUsageForecastCommandInput, GetUsageForecastCommandOutput } from "./commands/GetUsageForecastCommand";
import { ListCostCategoryDefinitionsCommandInput, ListCostCategoryDefinitionsCommandOutput } from "./commands/ListCostCategoryDefinitionsCommand";
import { ProvideAnomalyFeedbackCommandInput, ProvideAnomalyFeedbackCommandOutput } from "./commands/ProvideAnomalyFeedbackCommand";
import { UpdateAnomalyMonitorCommandInput, UpdateAnomalyMonitorCommandOutput } from "./commands/UpdateAnomalyMonitorCommand";
import { UpdateAnomalySubscriptionCommandInput, UpdateAnomalySubscriptionCommandOutput } from "./commands/UpdateAnomalySubscriptionCommand";
import { UpdateCostCategoryDefinitionCommandInput, UpdateCostCategoryDefinitionCommandOutput } from "./commands/UpdateCostCategoryDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>The Cost Explorer API enables you to programmatically query your cost and usage data. You can query for aggregated data
 * 			such as total monthly costs or total daily usage. You can also query for granular data, such as the number of
 * 			daily write operations for Amazon DynamoDB database tables in your production environment. </p>
 * 		       <p>Service Endpoint</p>
 * 		       <p>The Cost Explorer API provides the following endpoint:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>https://ce.us-east-1.amazonaws.com</code>
 *                </p>
 * 			         </li>
 *          </ul>
 * 		       <p>For information about costs associated with the Cost Explorer API, see
 * 			<a href="http://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>
 */
export declare class CostExplorer extends CostExplorerClient {
    /**
     * <p>Creates a new cost anomaly detection monitor with the requested type and monitor
     *       specification. </p>
     */
    createAnomalyMonitor(args: CreateAnomalyMonitorCommandInput, options?: __HttpHandlerOptions): Promise<CreateAnomalyMonitorCommandOutput>;
    createAnomalyMonitor(args: CreateAnomalyMonitorCommandInput, cb: (err: any, data?: CreateAnomalyMonitorCommandOutput) => void): void;
    createAnomalyMonitor(args: CreateAnomalyMonitorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAnomalyMonitorCommandOutput) => void): void;
    /**
     * <p>Adds a subscription to a cost anomaly detection monitor. You can use each subscription to
     *       define subscribers with email or SNS notifications. Email subscribers can set a dollar
     *       threshold and a time frequency for receiving notifications. </p>
     */
    createAnomalySubscription(args: CreateAnomalySubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<CreateAnomalySubscriptionCommandOutput>;
    createAnomalySubscription(args: CreateAnomalySubscriptionCommandInput, cb: (err: any, data?: CreateAnomalySubscriptionCommandOutput) => void): void;
    createAnomalySubscription(args: CreateAnomalySubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAnomalySubscriptionCommandOutput) => void): void;
    /**
     * <p>Creates a new Cost Category with the requested name and rules.</p>
     */
    createCostCategoryDefinition(args: CreateCostCategoryDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateCostCategoryDefinitionCommandOutput>;
    createCostCategoryDefinition(args: CreateCostCategoryDefinitionCommandInput, cb: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void): void;
    createCostCategoryDefinition(args: CreateCostCategoryDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCostCategoryDefinitionCommandOutput) => void): void;
    /**
     * <p>Deletes a cost anomaly monitor. </p>
     */
    deleteAnomalyMonitor(args: DeleteAnomalyMonitorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAnomalyMonitorCommandOutput>;
    deleteAnomalyMonitor(args: DeleteAnomalyMonitorCommandInput, cb: (err: any, data?: DeleteAnomalyMonitorCommandOutput) => void): void;
    deleteAnomalyMonitor(args: DeleteAnomalyMonitorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAnomalyMonitorCommandOutput) => void): void;
    /**
     * <p>Deletes a cost anomaly subscription. </p>
     */
    deleteAnomalySubscription(args: DeleteAnomalySubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAnomalySubscriptionCommandOutput>;
    deleteAnomalySubscription(args: DeleteAnomalySubscriptionCommandInput, cb: (err: any, data?: DeleteAnomalySubscriptionCommandOutput) => void): void;
    deleteAnomalySubscription(args: DeleteAnomalySubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAnomalySubscriptionCommandOutput) => void): void;
    /**
     * <p>Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.</p>
     */
    deleteCostCategoryDefinition(args: DeleteCostCategoryDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCostCategoryDefinitionCommandOutput>;
    deleteCostCategoryDefinition(args: DeleteCostCategoryDefinitionCommandInput, cb: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void): void;
    deleteCostCategoryDefinition(args: DeleteCostCategoryDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCostCategoryDefinitionCommandOutput) => void): void;
    /**
     * <p>Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account.</p>
     *          <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that is active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see a Cost Category that is effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
     */
    describeCostCategoryDefinition(args: DescribeCostCategoryDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCostCategoryDefinitionCommandOutput>;
    describeCostCategoryDefinition(args: DescribeCostCategoryDefinitionCommandInput, cb: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void): void;
    describeCostCategoryDefinition(args: DescribeCostCategoryDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCostCategoryDefinitionCommandOutput) => void): void;
    /**
     * <p>Retrieves all of the cost anomalies detected on your account, during the time period
     *       specified by the <code>DateInterval</code> object. </p>
     */
    getAnomalies(args: GetAnomaliesCommandInput, options?: __HttpHandlerOptions): Promise<GetAnomaliesCommandOutput>;
    getAnomalies(args: GetAnomaliesCommandInput, cb: (err: any, data?: GetAnomaliesCommandOutput) => void): void;
    getAnomalies(args: GetAnomaliesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAnomaliesCommandOutput) => void): void;
    /**
     * <p>Retrieves the cost anomaly monitor definitions for your account. You can filter using a
     *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
     */
    getAnomalyMonitors(args: GetAnomalyMonitorsCommandInput, options?: __HttpHandlerOptions): Promise<GetAnomalyMonitorsCommandOutput>;
    getAnomalyMonitors(args: GetAnomalyMonitorsCommandInput, cb: (err: any, data?: GetAnomalyMonitorsCommandOutput) => void): void;
    getAnomalyMonitors(args: GetAnomalyMonitorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAnomalyMonitorsCommandOutput) => void): void;
    /**
     * <p>Retrieves the cost anomaly subscription objects for your account. You can filter using a
     *       list of cost anomaly monitor Amazon Resource Names (ARNs). </p>
     */
    getAnomalySubscriptions(args: GetAnomalySubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<GetAnomalySubscriptionsCommandOutput>;
    getAnomalySubscriptions(args: GetAnomalySubscriptionsCommandInput, cb: (err: any, data?: GetAnomalySubscriptionsCommandOutput) => void): void;
    getAnomalySubscriptions(args: GetAnomalySubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAnomalySubscriptionsCommandOutput) => void): void;
    /**
     * <p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric, such as
     * 			<code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group
     * 			your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list
     * 			of valid dimensions, see the
     * 			<a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a>
     * 		  operation. Management account in an organization in AWS Organizations have access to all member accounts.</p>
     * 	        <p>For information about filter limitations, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>
     */
    getCostAndUsage(args: GetCostAndUsageCommandInput, options?: __HttpHandlerOptions): Promise<GetCostAndUsageCommandOutput>;
    getCostAndUsage(args: GetCostAndUsageCommandInput, cb: (err: any, data?: GetCostAndUsageCommandOutput) => void): void;
    getCostAndUsage(args: GetCostAndUsageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCostAndUsageCommandOutput) => void): void;
    /**
     * <p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and
     * 	    usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that
     * 	    you want the request to return. You can also filter and group your data by various dimensions,
     * 	    such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list
     * 	    of valid dimensions, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html">GetDimensionValues</a> operation. Management account in an organization in AWS
     * 	    Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p>
     * 	        <note>
     *             <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information on how to access the Settings page, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html">Controlling Access for Cost Explorer</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
     *          </note>
     */
    getCostAndUsageWithResources(args: GetCostAndUsageWithResourcesCommandInput, options?: __HttpHandlerOptions): Promise<GetCostAndUsageWithResourcesCommandOutput>;
    getCostAndUsageWithResources(args: GetCostAndUsageWithResourcesCommandInput, cb: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void): void;
    getCostAndUsageWithResources(args: GetCostAndUsageWithResourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCostAndUsageWithResourcesCommandOutput) => void): void;
    /**
     * <p>Retrieves an array of Cost Category names and values incurred cost.</p>
     * 	        <note>
     *             <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p>
     *          </note>
     */
    getCostCategories(args: GetCostCategoriesCommandInput, options?: __HttpHandlerOptions): Promise<GetCostCategoriesCommandOutput>;
    getCostCategories(args: GetCostCategoriesCommandInput, cb: (err: any, data?: GetCostCategoriesCommandOutput) => void): void;
    getCostCategories(args: GetCostCategoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCostCategoriesCommandOutput) => void): void;
    /**
     * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. </p>
     */
    getCostForecast(args: GetCostForecastCommandInput, options?: __HttpHandlerOptions): Promise<GetCostForecastCommandOutput>;
    getCostForecast(args: GetCostForecastCommandInput, cb: (err: any, data?: GetCostForecastCommandOutput) => void): void;
    getCostForecast(args: GetCostForecastCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetCostForecastCommandOutput) => void): void;
    /**
     * <p>Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. </p>
     */
    getDimensionValues(args: GetDimensionValuesCommandInput, options?: __HttpHandlerOptions): Promise<GetDimensionValuesCommandOutput>;
    getDimensionValues(args: GetDimensionValuesCommandInput, cb: (err: any, data?: GetDimensionValuesCommandOutput) => void): void;
    getDimensionValues(args: GetDimensionValuesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDimensionValuesCommandOutput) => void): void;
    /**
     * <p>Retrieves the reservation coverage for your account. This enables you to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or
     * 		  Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions.
     * 			For any time period, you can filter data about reservation usage by the following dimensions:</p>
     * 		       <ul>
     *             <li>
     *                <p>AZ</p>
     *             </li>
     *             <li>
     *                <p>CACHE_ENGINE</p>
     *             </li>
     *             <li>
     *                <p>DATABASE_ENGINE</p>
     *             </li>
     *             <li>
     *                <p>DEPLOYMENT_OPTION</p>
     *             </li>
     *             <li>
     *                <p>INSTANCE_TYPE</p>
     *             </li>
     *             <li>
     *                <p>LINKED_ACCOUNT</p>
     *             </li>
     *             <li>
     *                <p>OPERATING_SYSTEM</p>
     *             </li>
     *             <li>
     *                <p>PLATFORM</p>
     *             </li>
     *             <li>
     *                <p>REGION</p>
     *             </li>
     *             <li>
     *                <p>SERVICE</p>
     *             </li>
     *             <li>
     *                <p>TAG</p>
     *             </li>
     *             <li>
     *                <p>TENANCY</p>
     *             </li>
     *          </ul>
     * 		       <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>
     */
    getReservationCoverage(args: GetReservationCoverageCommandInput, options?: __HttpHandlerOptions): Promise<GetReservationCoverageCommandOutput>;
    getReservationCoverage(args: GetReservationCoverageCommandInput, cb: (err: any, data?: GetReservationCoverageCommandOutput) => void): void;
    getReservationCoverage(args: GetReservationCoverageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReservationCoverageCommandOutput) => void): void;
    /**
     * <p>Gets recommendations for which reservations to purchase. These recommendations could help you reduce your costs.
     * 			Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p>
     * 		       <p>AWS generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage
     * 			into categories that are eligible for a reservation. After AWS has these categories, it simulates every combination of reservations
     * 			in each category of usage to identify the best number of each type of RI to purchase to maximize your estimated savings. </p>
     * 		       <p>For example, AWS automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region
     * 			and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. AWS recommends the smallest size instance
     * 			in an instance family. This makes it easier to purchase a size-flexible RI. AWS also shows the equal number of normalized units
     * 			so that you can purchase any instance size that you want. For this example, your RI recommendation would be for <code>c4.large</code>
     * 			because that is the smallest size instance in the c4 instance family.</p>
     */
    getReservationPurchaseRecommendation(args: GetReservationPurchaseRecommendationCommandInput, options?: __HttpHandlerOptions): Promise<GetReservationPurchaseRecommendationCommandOutput>;
    getReservationPurchaseRecommendation(args: GetReservationPurchaseRecommendationCommandInput, cb: (err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void): void;
    getReservationPurchaseRecommendation(args: GetReservationPurchaseRecommendationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReservationPurchaseRecommendationCommandOutput) => void): void;
    /**
     * <p>Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts.
     * 			You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible
     * 			dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>
     */
    getReservationUtilization(args: GetReservationUtilizationCommandInput, options?: __HttpHandlerOptions): Promise<GetReservationUtilizationCommandOutput>;
    getReservationUtilization(args: GetReservationUtilizationCommandInput, cb: (err: any, data?: GetReservationUtilizationCommandOutput) => void): void;
    getReservationUtilization(args: GetReservationUtilizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetReservationUtilizationCommandOutput) => void): void;
    /**
     * <p>Creates recommendations that
     *       help you save cost
     *       by identifying idle and underutilized Amazon EC2 instances.</p>
     *          <p>Recommendations are generated to either downsize or terminate instances, along with
     *       providing savings detail and metrics. For details on calculation and function, see
     *         <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html">Optimizing
     *         Your Cost with Rightsizing
     *       Recommendations</a>
     *       in the <i>AWS Billing and Cost Management User
     *       Guide</i>.</p>
     */
    getRightsizingRecommendation(args: GetRightsizingRecommendationCommandInput, options?: __HttpHandlerOptions): Promise<GetRightsizingRecommendationCommandOutput>;
    getRightsizingRecommendation(args: GetRightsizingRecommendationCommandInput, cb: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void): void;
    getRightsizingRecommendation(args: GetRightsizingRecommendationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRightsizingRecommendationCommandOutput) => void): void;
    /**
     * <p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p>
     * 	        <ul>
     *             <li>
     *                <p>
     *                   <code>LINKED_ACCOUNT</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>REGION</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SERVICE</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>INSTANCE_FAMILY</code>
     *                </p>
     *             </li>
     *          </ul>
     * 	        <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>
     */
    getSavingsPlansCoverage(args: GetSavingsPlansCoverageCommandInput, options?: __HttpHandlerOptions): Promise<GetSavingsPlansCoverageCommandOutput>;
    getSavingsPlansCoverage(args: GetSavingsPlansCoverageCommandInput, cb: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void): void;
    getSavingsPlansCoverage(args: GetSavingsPlansCoverageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSavingsPlansCoverageCommandOutput) => void): void;
    /**
     * <p>Retrieves your request parameters, Savings Plan Recommendations Summary and Details. </p>
     */
    getSavingsPlansPurchaseRecommendation(args: GetSavingsPlansPurchaseRecommendationCommandInput, options?: __HttpHandlerOptions): Promise<GetSavingsPlansPurchaseRecommendationCommandOutput>;
    getSavingsPlansPurchaseRecommendation(args: GetSavingsPlansPurchaseRecommendationCommandInput, cb: (err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void): void;
    getSavingsPlansPurchaseRecommendation(args: GetSavingsPlansPurchaseRecommendationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSavingsPlansPurchaseRecommendationCommandOutput) => void): void;
    /**
     * <p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
     * 	        <note>
     *             <p>You cannot group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p>
     *          </note>
     */
    getSavingsPlansUtilization(args: GetSavingsPlansUtilizationCommandInput, options?: __HttpHandlerOptions): Promise<GetSavingsPlansUtilizationCommandOutput>;
    getSavingsPlansUtilization(args: GetSavingsPlansUtilizationCommandInput, cb: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void): void;
    getSavingsPlansUtilization(args: GetSavingsPlansUtilizationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSavingsPlansUtilizationCommandOutput) => void): void;
    /**
     * <p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p>
     * 	        <note>
     *             <p>
     *                <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p>
     *          </note>
     */
    getSavingsPlansUtilizationDetails(args: GetSavingsPlansUtilizationDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetSavingsPlansUtilizationDetailsCommandOutput>;
    getSavingsPlansUtilizationDetails(args: GetSavingsPlansUtilizationDetailsCommandInput, cb: (err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void): void;
    getSavingsPlansUtilizationDetails(args: GetSavingsPlansUtilizationDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSavingsPlansUtilizationDetailsCommandOutput) => void): void;
    /**
     * <p>Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. </p>
     */
    getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
    getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
    getTags(args: GetTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
    /**
     * <p>Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. </p>
     */
    getUsageForecast(args: GetUsageForecastCommandInput, options?: __HttpHandlerOptions): Promise<GetUsageForecastCommandOutput>;
    getUsageForecast(args: GetUsageForecastCommandInput, cb: (err: any, data?: GetUsageForecastCommandOutput) => void): void;
    getUsageForecast(args: GetUsageForecastCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetUsageForecastCommandOutput) => void): void;
    /**
     * <p>Returns the name, ARN, <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.</p>
     */
    listCostCategoryDefinitions(args: ListCostCategoryDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListCostCategoryDefinitionsCommandOutput>;
    listCostCategoryDefinitions(args: ListCostCategoryDefinitionsCommandInput, cb: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void): void;
    listCostCategoryDefinitions(args: ListCostCategoryDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCostCategoryDefinitionsCommandOutput) => void): void;
    /**
     * <p>Modifies the feedback property of a given cost anomaly. </p>
     */
    provideAnomalyFeedback(args: ProvideAnomalyFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<ProvideAnomalyFeedbackCommandOutput>;
    provideAnomalyFeedback(args: ProvideAnomalyFeedbackCommandInput, cb: (err: any, data?: ProvideAnomalyFeedbackCommandOutput) => void): void;
    provideAnomalyFeedback(args: ProvideAnomalyFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ProvideAnomalyFeedbackCommandOutput) => void): void;
    /**
     * <p>Updates an existing cost anomaly monitor. The changes made are applied going forward, and
     *       does not change anomalies detected in the past. </p>
     */
    updateAnomalyMonitor(args: UpdateAnomalyMonitorCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAnomalyMonitorCommandOutput>;
    updateAnomalyMonitor(args: UpdateAnomalyMonitorCommandInput, cb: (err: any, data?: UpdateAnomalyMonitorCommandOutput) => void): void;
    updateAnomalyMonitor(args: UpdateAnomalyMonitorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAnomalyMonitorCommandOutput) => void): void;
    /**
     * <p> Updates an existing cost anomaly monitor subscription. </p>
     */
    updateAnomalySubscription(args: UpdateAnomalySubscriptionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAnomalySubscriptionCommandOutput>;
    updateAnomalySubscription(args: UpdateAnomalySubscriptionCommandInput, cb: (err: any, data?: UpdateAnomalySubscriptionCommandOutput) => void): void;
    updateAnomalySubscription(args: UpdateAnomalySubscriptionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAnomalySubscriptionCommandOutput) => void): void;
    /**
     * <p>Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.</p>
     */
    updateCostCategoryDefinition(args: UpdateCostCategoryDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCostCategoryDefinitionCommandOutput>;
    updateCostCategoryDefinition(args: UpdateCostCategoryDefinitionCommandInput, cb: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void): void;
    updateCostCategoryDefinition(args: UpdateCostCategoryDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCostCategoryDefinitionCommandOutput) => void): void;
}
