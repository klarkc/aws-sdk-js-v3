import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { CreateLabelsRequest, CreateLabelsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLabelsCommandInput extends CreateLabelsRequest {
}
export interface CreateLabelsCommandOutput extends CreateLabelsResponse, __MetadataBearer {
}
/**
 * <p>Adds the specified list of labels to the given resource (a document or
 *             folder)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateLabelsCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateLabelsCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateLabelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLabelsCommandInput} for command's `input` shape.
 * @see {@link CreateLabelsCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLabelsCommand extends $Command<CreateLabelsCommandInput, CreateLabelsCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: CreateLabelsCommandInput;
    constructor(input: CreateLabelsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLabelsCommandInput, CreateLabelsCommandOutput>;
    private serialize;
    private deserialize;
}
