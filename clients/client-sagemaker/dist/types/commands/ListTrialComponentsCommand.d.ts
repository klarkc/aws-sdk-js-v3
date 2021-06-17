import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrialComponentsRequest, ListTrialComponentsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTrialComponentsCommandInput extends ListTrialComponentsRequest {
}
export interface ListTrialComponentsCommandOutput extends ListTrialComponentsResponse, __MetadataBearer {
}
/**
 * <p>Lists the trial components in your account. You can sort the list by trial component name
 *       or creation time. You can filter the list to show only components that were created in a
 *       specific time range. You can also filter on one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ExperimentName</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SourceArn</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TrialName</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrialComponentsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrialComponentsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTrialComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrialComponentsCommandInput} for command's `input` shape.
 * @see {@link ListTrialComponentsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTrialComponentsCommand extends $Command<ListTrialComponentsCommandInput, ListTrialComponentsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTrialComponentsCommandInput;
    constructor(input: ListTrialComponentsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrialComponentsCommandInput, ListTrialComponentsCommandOutput>;
    private serialize;
    private deserialize;
}
