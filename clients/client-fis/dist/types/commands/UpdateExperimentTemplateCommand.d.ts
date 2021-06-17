import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { UpdateExperimentTemplateRequest, UpdateExperimentTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateExperimentTemplateCommandInput extends UpdateExperimentTemplateRequest {
}
export interface UpdateExperimentTemplateCommandOutput extends UpdateExperimentTemplateResponse, __MetadataBearer {
}
/**
 * <p>Updates the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, UpdateExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, UpdateExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new UpdateExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateExperimentTemplateCommand extends $Command<UpdateExperimentTemplateCommandInput, UpdateExperimentTemplateCommandOutput, FisClientResolvedConfig> {
    readonly input: UpdateExperimentTemplateCommandInput;
    constructor(input: UpdateExperimentTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateExperimentTemplateCommandInput, UpdateExperimentTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
