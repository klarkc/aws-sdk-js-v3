import { __extends } from "tslib";
import { CreateSampleFindingsRequest, CreateSampleFindingsResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSampleFindingsCommand, serializeAws_restJson1CreateSampleFindingsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates example findings of types specified by the list of finding types. If 'NULL' is
 *       specified for <code>findingTypes</code>, the API generates example findings of all supported
 *       finding types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateSampleFindingsCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateSampleFindingsCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateSampleFindingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSampleFindingsCommandInput} for command's `input` shape.
 * @see {@link CreateSampleFindingsCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSampleFindingsCommand = /** @class */ (function (_super) {
    __extends(CreateSampleFindingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSampleFindingsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    CreateSampleFindingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GuardDutyClient";
        var commandName = "CreateSampleFindingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSampleFindingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSampleFindingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSampleFindingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSampleFindingsCommand(input, context);
    };
    CreateSampleFindingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSampleFindingsCommand(output, context);
    };
    return CreateSampleFindingsCommand;
}($Command));
export { CreateSampleFindingsCommand };
//# sourceMappingURL=CreateSampleFindingsCommand.js.map