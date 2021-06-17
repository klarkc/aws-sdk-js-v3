import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetDimensionValuesRequest, GetDimensionValuesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDimensionValuesCommandInput extends GetDimensionValuesRequest {
}
export interface GetDimensionValuesCommandOutput extends GetDimensionValuesResponse, __MetadataBearer {
}
/**
 * <p>Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, GetDimensionValuesCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, GetDimensionValuesCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new GetDimensionValuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDimensionValuesCommandInput} for command's `input` shape.
 * @see {@link GetDimensionValuesCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDimensionValuesCommand extends $Command<GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetDimensionValuesCommandInput;
    constructor(input: GetDimensionValuesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDimensionValuesCommandInput, GetDimensionValuesCommandOutput>;
    private serialize;
    private deserialize;
}
