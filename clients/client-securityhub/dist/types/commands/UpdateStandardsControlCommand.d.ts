import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";
import { UpdateStandardsControlRequest, UpdateStandardsControlResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateStandardsControlCommandInput extends UpdateStandardsControlRequest {
}
export interface UpdateStandardsControlCommandOutput extends UpdateStandardsControlResponse, __MetadataBearer {
}
/**
 * <p>Used to control whether an individual security standard control is enabled or
 *          disabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, UpdateStandardsControlCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, UpdateStandardsControlCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new UpdateStandardsControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStandardsControlCommandInput} for command's `input` shape.
 * @see {@link UpdateStandardsControlCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateStandardsControlCommand extends $Command<UpdateStandardsControlCommandInput, UpdateStandardsControlCommandOutput, SecurityHubClientResolvedConfig> {
    readonly input: UpdateStandardsControlCommandInput;
    constructor(input: UpdateStandardsControlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecurityHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStandardsControlCommandInput, UpdateStandardsControlCommandOutput>;
    private serialize;
    private deserialize;
}
