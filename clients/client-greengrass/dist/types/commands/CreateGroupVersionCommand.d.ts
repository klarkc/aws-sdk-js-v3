import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateGroupVersionRequest, CreateGroupVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateGroupVersionCommandInput extends CreateGroupVersionRequest {
}
export interface CreateGroupVersionCommandOutput extends CreateGroupVersionResponse, __MetadataBearer {
}
/**
 * Creates a version of a group which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateGroupVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateGroupVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateGroupVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateGroupVersionCommandInput} for command's `input` shape.
 * @see {@link CreateGroupVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateGroupVersionCommand extends $Command<CreateGroupVersionCommandInput, CreateGroupVersionCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateGroupVersionCommandInput;
    constructor(input: CreateGroupVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGroupVersionCommandInput, CreateGroupVersionCommandOutput>;
    private serialize;
    private deserialize;
}
