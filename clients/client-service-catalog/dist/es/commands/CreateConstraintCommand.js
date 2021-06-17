import { __extends } from "tslib";
import { CreateConstraintInput, CreateConstraintOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateConstraintCommand, serializeAws_json1_1CreateConstraintCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a constraint.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, CreateConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, CreateConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new CreateConstraintCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConstraintCommandInput} for command's `input` shape.
 * @see {@link CreateConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConstraintCommand = /** @class */ (function (_super) {
    __extends(CreateConstraintCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateConstraintCommand(input) {
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
    CreateConstraintCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "CreateConstraintCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateConstraintInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateConstraintOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateConstraintCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateConstraintCommand(input, context);
    };
    CreateConstraintCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateConstraintCommand(output, context);
    };
    return CreateConstraintCommand;
}($Command));
export { CreateConstraintCommand };
//# sourceMappingURL=CreateConstraintCommand.js.map