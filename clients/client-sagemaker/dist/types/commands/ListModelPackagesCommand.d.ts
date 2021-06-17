import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListModelPackagesInput, ListModelPackagesOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListModelPackagesCommandInput extends ListModelPackagesInput {
}
export interface ListModelPackagesCommandOutput extends ListModelPackagesOutput, __MetadataBearer {
}
/**
 * <p>Lists the model packages that have been created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListModelPackagesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListModelPackagesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListModelPackagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListModelPackagesCommandInput} for command's `input` shape.
 * @see {@link ListModelPackagesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListModelPackagesCommand extends $Command<ListModelPackagesCommandInput, ListModelPackagesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListModelPackagesCommandInput;
    constructor(input: ListModelPackagesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListModelPackagesCommandInput, ListModelPackagesCommandOutput>;
    private serialize;
    private deserialize;
}
