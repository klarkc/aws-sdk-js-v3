import { __extends } from "tslib";
import { CreateSavingsPlanRequest, CreateSavingsPlanResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSavingsPlanCommand, serializeAws_restJson1CreateSavingsPlanCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Savings Plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SavingsplansClient, CreateSavingsPlanCommand } from "@aws-sdk/client-savingsplans"; // ES Modules import
 * // const { SavingsplansClient, CreateSavingsPlanCommand } = require("@aws-sdk/client-savingsplans"); // CommonJS import
 * const client = new SavingsplansClient(config);
 * const command = new CreateSavingsPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSavingsPlanCommandInput} for command's `input` shape.
 * @see {@link CreateSavingsPlanCommandOutput} for command's `response` shape.
 * @see {@link SavingsplansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSavingsPlanCommand = /** @class */ (function (_super) {
    __extends(CreateSavingsPlanCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSavingsPlanCommand(input) {
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
    CreateSavingsPlanCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SavingsplansClient";
        var commandName = "CreateSavingsPlanCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSavingsPlanRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSavingsPlanResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSavingsPlanCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSavingsPlanCommand(input, context);
    };
    CreateSavingsPlanCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSavingsPlanCommand(output, context);
    };
    return CreateSavingsPlanCommand;
}($Command));
export { CreateSavingsPlanCommand };
//# sourceMappingURL=CreateSavingsPlanCommand.js.map