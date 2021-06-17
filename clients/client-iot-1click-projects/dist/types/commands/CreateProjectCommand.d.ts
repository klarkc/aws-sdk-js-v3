import { IoT1ClickProjectsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoT1ClickProjectsClient";
import { CreateProjectRequest, CreateProjectResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProjectCommandInput extends CreateProjectRequest {
}
export interface CreateProjectCommandOutput extends CreateProjectResponse, __MetadataBearer {
}
/**
 * <p>Creates an empty project with a placement template. A project contains zero or more
 *       placements that adhere to the placement template defined in the project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickProjectsClient, CreateProjectCommand } from "@aws-sdk/client-iot-1click-projects"; // ES Modules import
 * // const { IoT1ClickProjectsClient, CreateProjectCommand } = require("@aws-sdk/client-iot-1click-projects"); // CommonJS import
 * const client = new IoT1ClickProjectsClient(config);
 * const command = new CreateProjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProjectCommandInput} for command's `input` shape.
 * @see {@link CreateProjectCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickProjectsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProjectCommand extends $Command<CreateProjectCommandInput, CreateProjectCommandOutput, IoT1ClickProjectsClientResolvedConfig> {
    readonly input: CreateProjectCommandInput;
    constructor(input: CreateProjectCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoT1ClickProjectsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProjectCommandInput, CreateProjectCommandOutput>;
    private serialize;
    private deserialize;
}
