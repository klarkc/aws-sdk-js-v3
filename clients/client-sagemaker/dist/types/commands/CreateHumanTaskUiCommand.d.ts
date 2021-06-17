import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateHumanTaskUiRequest, CreateHumanTaskUiResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateHumanTaskUiCommandInput extends CreateHumanTaskUiRequest {
}
export interface CreateHumanTaskUiCommandOutput extends CreateHumanTaskUiResponse, __MetadataBearer {
}
/**
 * <p>Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateHumanTaskUiCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateHumanTaskUiCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateHumanTaskUiCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHumanTaskUiCommandInput} for command's `input` shape.
 * @see {@link CreateHumanTaskUiCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateHumanTaskUiCommand extends $Command<CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateHumanTaskUiCommandInput;
    constructor(input: CreateHumanTaskUiCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput>;
    private serialize;
    private deserialize;
}
