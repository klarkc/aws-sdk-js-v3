import { CodeGuruProfilerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruProfilerClient";
import { GetNotificationConfigurationRequest, GetNotificationConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetNotificationConfigurationCommandInput extends GetNotificationConfigurationRequest {
}
export interface GetNotificationConfigurationCommandOutput extends GetNotificationConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Get the current configuration for anomaly notifications for a profiling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruProfilerClient, GetNotificationConfigurationCommand } from "@aws-sdk/client-codeguruprofiler"; // ES Modules import
 * // const { CodeGuruProfilerClient, GetNotificationConfigurationCommand } = require("@aws-sdk/client-codeguruprofiler"); // CommonJS import
 * const client = new CodeGuruProfilerClient(config);
 * const command = new GetNotificationConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNotificationConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetNotificationConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetNotificationConfigurationCommand extends $Command<GetNotificationConfigurationCommandInput, GetNotificationConfigurationCommandOutput, CodeGuruProfilerClientResolvedConfig> {
    readonly input: GetNotificationConfigurationCommandInput;
    constructor(input: GetNotificationConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeGuruProfilerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNotificationConfigurationCommandInput, GetNotificationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
