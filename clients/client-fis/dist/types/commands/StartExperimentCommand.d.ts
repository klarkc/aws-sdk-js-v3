import { FisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FisClient";
import { StartExperimentRequest, StartExperimentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartExperimentCommandInput extends StartExperimentRequest {
}
export interface StartExperimentCommandOutput extends StartExperimentResponse, __MetadataBearer {
}
/**
 * <p>Starts running an experiment from the specified experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, StartExperimentCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, StartExperimentCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * const client = new FisClient(config);
 * const command = new StartExperimentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExperimentCommandInput} for command's `input` shape.
 * @see {@link StartExperimentCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartExperimentCommand extends $Command<StartExperimentCommandInput, StartExperimentCommandOutput, FisClientResolvedConfig> {
    readonly input: StartExperimentCommandInput;
    constructor(input: StartExperimentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartExperimentCommandInput, StartExperimentCommandOutput>;
    private serialize;
    private deserialize;
}
