import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { DeleteStudioInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteStudioCommandInput extends DeleteStudioInput {
}
export interface DeleteStudioCommandOutput extends __MetadataBearer {
}
/**
 * <p>Removes an Amazon EMR Studio from the Studio metadata store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteStudioCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteStudioCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new DeleteStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteStudioCommand extends $Command<DeleteStudioCommandInput, DeleteStudioCommandOutput, EMRClientResolvedConfig> {
    readonly input: DeleteStudioCommandInput;
    constructor(input: DeleteStudioCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStudioCommandInput, DeleteStudioCommandOutput>;
    private serialize;
    private deserialize;
}
