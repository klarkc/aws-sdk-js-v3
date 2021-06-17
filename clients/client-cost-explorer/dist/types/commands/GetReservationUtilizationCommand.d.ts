import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetReservationUtilizationRequest, GetReservationUtilizationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetReservationUtilizationCommandInput extends GetReservationUtilizationRequest {
}
export interface GetReservationUtilizationCommandOutput extends GetReservationUtilizationResponse, __MetadataBearer {
}
/**
 * <p>Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts.
 * 			You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible
 * 			dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetReservationUtilizationCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetReservationUtilizationCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetReservationUtilizationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReservationUtilizationCommandInput} for command's `input` shape.
 * @see {@link GetReservationUtilizationCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetReservationUtilizationCommand extends $Command<GetReservationUtilizationCommandInput, GetReservationUtilizationCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetReservationUtilizationCommandInput;
    constructor(input: GetReservationUtilizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReservationUtilizationCommandInput, GetReservationUtilizationCommandOutput>;
    private serialize;
    private deserialize;
}
