import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { CreateFolderRequest, CreateFolderResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFolderCommandInput extends CreateFolderRequest {
}
export interface CreateFolderCommandOutput extends CreateFolderResponse, __MetadataBearer {
}
/**
 * <p>Creates a folder with the specified name and parent folder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, CreateFolderCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, CreateFolderCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new CreateFolderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFolderCommandInput} for command's `input` shape.
 * @see {@link CreateFolderCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFolderCommand extends $Command<CreateFolderCommandInput, CreateFolderCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: CreateFolderCommandInput;
    constructor(input: CreateFolderCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFolderCommandInput, CreateFolderCommandOutput>;
    private serialize;
    private deserialize;
}
