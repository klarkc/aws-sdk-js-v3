import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteContainerServiceRequest, DeleteContainerServiceResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteContainerServiceCommandInput extends DeleteContainerServiceRequest {
}
export interface DeleteContainerServiceCommandOutput extends DeleteContainerServiceResult, __MetadataBearer {
}
/**
 * <p>Deletes your Amazon Lightsail container service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteContainerServiceCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteContainerServiceCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteContainerServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteContainerServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerServiceCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteContainerServiceCommand extends $Command<DeleteContainerServiceCommandInput, DeleteContainerServiceCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteContainerServiceCommandInput;
    constructor(input: DeleteContainerServiceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteContainerServiceCommandInput, DeleteContainerServiceCommandOutput>;
    private serialize;
    private deserialize;
}
