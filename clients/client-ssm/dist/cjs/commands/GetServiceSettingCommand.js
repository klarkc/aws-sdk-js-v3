"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetServiceSettingCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             <code>ServiceSetting</code> is an account-level setting for an AWS service. This setting
 *    defines how a user interacts with or uses a service or a feature of a service. For example, if an
 *    AWS service charges money to the account based on feature or service usage, then the AWS service
 *    team might create a default setting of "false". This means the user can't use this feature unless
 *    they change the setting to "true" and intentionally opt in for a paid feature.</p>
 *          <p>Services map a <code>SettingId</code> object to a setting value. AWS services teams define
 *    the default value for a <code>SettingId</code>. You can't create a new <code>SettingId</code>,
 *    but you can overwrite the default value if you have the <code>ssm:UpdateServiceSetting</code>
 *    permission for the setting. Use the <a>UpdateServiceSetting</a> API action to change
 *    the default setting. Or use the <a>ResetServiceSetting</a> to change the value back to
 *    the original value defined by the AWS service team.</p>
 *          <p>Query the current service setting for the account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetServiceSettingCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetServiceSettingCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetServiceSettingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceSettingCommandInput} for command's `input` shape.
 * @see {@link GetServiceSettingCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetServiceSettingCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "SSMClient";
        const commandName = "GetServiceSettingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.GetServiceSettingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.GetServiceSettingResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1GetServiceSettingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1GetServiceSettingCommand(output, context);
    }
}
exports.GetServiceSettingCommand = GetServiceSettingCommand;
//# sourceMappingURL=GetServiceSettingCommand.js.map