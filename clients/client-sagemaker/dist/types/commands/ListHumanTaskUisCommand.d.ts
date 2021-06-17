import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListHumanTaskUisRequest, ListHumanTaskUisResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListHumanTaskUisCommandInput extends ListHumanTaskUisRequest {
}
export interface ListHumanTaskUisCommandOutput extends ListHumanTaskUisResponse, __MetadataBearer {
}
/**
 * <p>Returns information about the human task user interfaces in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListHumanTaskUisCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListHumanTaskUisCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListHumanTaskUisCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListHumanTaskUisCommandInput} for command's `input` shape.
 * @see {@link ListHumanTaskUisCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListHumanTaskUisCommand extends $Command<ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListHumanTaskUisCommandInput;
    constructor(input: ListHumanTaskUisCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput>;
    private serialize;
    private deserialize;
}
