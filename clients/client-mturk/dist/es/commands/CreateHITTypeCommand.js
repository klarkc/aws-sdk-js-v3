import { __extends } from "tslib";
import { CreateHITTypeRequest, CreateHITTypeResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateHITTypeCommand, serializeAws_json1_1CreateHITTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             The <code>CreateHITType</code> operation creates a new HIT type. This operation
 *             allows you to define a standard set of HIT properties to use when creating HITs.
 *             If you register a HIT type with values that match an existing HIT type, the HIT type
 *             ID of the existing type will be returned.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, CreateHITTypeCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, CreateHITTypeCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new CreateHITTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHITTypeCommandInput} for command's `input` shape.
 * @see {@link CreateHITTypeCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHITTypeCommand = /** @class */ (function (_super) {
    __extends(CreateHITTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHITTypeCommand(input) {
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
    CreateHITTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "CreateHITTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHITTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHITTypeResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHITTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateHITTypeCommand(input, context);
    };
    CreateHITTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateHITTypeCommand(output, context);
    };
    return CreateHITTypeCommand;
}($Command));
export { CreateHITTypeCommand };
//# sourceMappingURL=CreateHITTypeCommand.js.map