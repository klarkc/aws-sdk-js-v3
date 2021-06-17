import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrialsRequest, ListTrialsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTrialsCommandInput extends ListTrialsRequest {
}
export interface ListTrialsCommandOutput extends ListTrialsResponse, __MetadataBearer {
}
/**
 * <p>Lists the trials in your account. Specify an experiment name to limit the list to the
 *       trials that are part of that experiment. Specify a trial component name to limit the list to
 *       the trials that associated with that trial component. The list can be filtered to show only
 *       trials that were created in a specific time range. The list can be sorted by trial name or
 *       creation time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrialsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrialsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTrialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrialsCommandInput} for command's `input` shape.
 * @see {@link ListTrialsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTrialsCommand extends $Command<ListTrialsCommandInput, ListTrialsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTrialsCommandInput;
    constructor(input: ListTrialsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrialsCommandInput, ListTrialsCommandOutput>;
    private serialize;
    private deserialize;
}
