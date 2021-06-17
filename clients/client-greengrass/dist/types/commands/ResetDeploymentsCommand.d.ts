import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ResetDeploymentsRequest, ResetDeploymentsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ResetDeploymentsCommandInput extends ResetDeploymentsRequest {
}
export interface ResetDeploymentsCommandOutput extends ResetDeploymentsResponse, __MetadataBearer {
}
/**
 * Resets a group's deployments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ResetDeploymentsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ResetDeploymentsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ResetDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ResetDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ResetDeploymentsCommand extends $Command<ResetDeploymentsCommandInput, ResetDeploymentsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ResetDeploymentsCommandInput;
    constructor(input: ResetDeploymentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetDeploymentsCommandInput, ResetDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
