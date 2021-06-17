import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { CreateInputSecurityGroupRequest, CreateInputSecurityGroupResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInputSecurityGroupCommandInput extends CreateInputSecurityGroupRequest {
}
export interface CreateInputSecurityGroupCommandOutput extends CreateInputSecurityGroupResponse, __MetadataBearer {
}
/**
 * Creates a Input Security Group
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, CreateInputSecurityGroupCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, CreateInputSecurityGroupCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const command = new CreateInputSecurityGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInputSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateInputSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInputSecurityGroupCommand extends $Command<CreateInputSecurityGroupCommandInput, CreateInputSecurityGroupCommandOutput, MediaLiveClientResolvedConfig> {
    readonly input: CreateInputSecurityGroupCommandInput;
    constructor(input: CreateInputSecurityGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaLiveClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInputSecurityGroupCommandInput, CreateInputSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
