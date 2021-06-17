import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { CreateCustomMetadataRequest, CreateCustomMetadataResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCustomMetadataCommandInput extends CreateCustomMetadataRequest {
}
export interface CreateCustomMetadataCommandOutput extends CreateCustomMetadataResponse, __MetadataBearer {
}
/**
 * <p>Adds one or more custom properties to the specified resource (a folder, document,
 *             or version).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateCustomMetadataCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateCustomMetadataCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateCustomMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomMetadataCommandInput} for command's `input` shape.
 * @see {@link CreateCustomMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCustomMetadataCommand extends $Command<CreateCustomMetadataCommandInput, CreateCustomMetadataCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: CreateCustomMetadataCommandInput;
    constructor(input: CreateCustomMetadataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomMetadataCommandInput, CreateCustomMetadataCommandOutput>;
    private serialize;
    private deserialize;
}
