import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { GetExperimentTemplateRequest, GetExperimentTemplateResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetExperimentTemplateCommandInput extends GetExperimentTemplateRequest {
}
export interface GetExperimentTemplateCommandOutput extends GetExperimentTemplateResponse, __MetadataBearer {
}
/**
 * <p>Gets information about the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, GetExperimentTemplateCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, GetExperimentTemplateCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new GetExperimentTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExperimentTemplateCommandInput} for command's `input` shape.
 * @see {@link GetExperimentTemplateCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetExperimentTemplateCommand extends $Command<GetExperimentTemplateCommandInput, GetExperimentTemplateCommandOutput, FisClientResolvedConfig> {
    readonly input: GetExperimentTemplateCommandInput;
    constructor(input: GetExperimentTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetExperimentTemplateCommandInput, GetExperimentTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
