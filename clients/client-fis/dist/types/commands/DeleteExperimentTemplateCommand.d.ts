import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { DeleteExperimentTemplateRequest, DeleteExperimentTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteExperimentTemplateCommandInput extends DeleteExperimentTemplateRequest {
}
export interface DeleteExperimentTemplateCommandOutput extends DeleteExperimentTemplateResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, DeleteExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, DeleteExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new DeleteExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteExperimentTemplateCommand extends $Command<DeleteExperimentTemplateCommandInput, DeleteExperimentTemplateCommandOutput, FisClientResolvedConfig> {
    readonly input: DeleteExperimentTemplateCommandInput;
    constructor(input: DeleteExperimentTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteExperimentTemplateCommandInput, DeleteExperimentTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
