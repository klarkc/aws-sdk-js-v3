import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { UpdateStudioInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateStudioCommandInput extends UpdateStudioInput {
}
export interface UpdateStudioCommandOutput extends __MetadataBearer {
}
/**
 * <p>Updates an Amazon EMR Studio configuration, including attributes such as name, description, and subnets.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, UpdateStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, UpdateStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new UpdateStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStudioCommandInput} for command's `input` shape.
 * @see {@link UpdateStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateStudioCommand extends $Command<UpdateStudioCommandInput, UpdateStudioCommandOutput, EMRClientResolvedConfig> {
    readonly input: UpdateStudioCommandInput;
    constructor(input: UpdateStudioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateStudioCommandInput, UpdateStudioCommandOutput>;
    private serialize;
    private deserialize;
}
