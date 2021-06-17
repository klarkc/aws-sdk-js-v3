import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateSoftwareUpdateJobRequest, CreateSoftwareUpdateJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateSoftwareUpdateJobCommandInput extends CreateSoftwareUpdateJobRequest {
}
export interface CreateSoftwareUpdateJobCommandOutput extends CreateSoftwareUpdateJobResponse, __MetadataBearer {
}
/**
 * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSoftwareUpdateJobCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateSoftwareUpdateJobCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateSoftwareUpdateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSoftwareUpdateJobCommandInput} for command's `input` shape.
 * @see {@link CreateSoftwareUpdateJobCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateSoftwareUpdateJobCommand extends $Command<CreateSoftwareUpdateJobCommandInput, CreateSoftwareUpdateJobCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateSoftwareUpdateJobCommandInput;
    constructor(input: CreateSoftwareUpdateJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSoftwareUpdateJobCommandInput, CreateSoftwareUpdateJobCommandOutput>;
    private serialize;
    private deserialize;
}
