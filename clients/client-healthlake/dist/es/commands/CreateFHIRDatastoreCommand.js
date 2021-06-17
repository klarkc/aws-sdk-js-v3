import { __extends } from "tslib";
import { CreateFHIRDatastoreRequest, CreateFHIRDatastoreResponse } from "../models/models_0";
import { deserializeAws_json1_0CreateFHIRDatastoreCommand, serializeAws_json1_0CreateFHIRDatastoreCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a Data Store that can ingest and export FHIR formatted data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, CreateFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, CreateFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new CreateFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link CreateFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateFHIRDatastoreCommand = /** @class */ (function (_super) {
    __extends(CreateFHIRDatastoreCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateFHIRDatastoreCommand(input) {
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
    CreateFHIRDatastoreCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "HealthLakeClient";
        var commandName = "CreateFHIRDatastoreCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateFHIRDatastoreRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateFHIRDatastoreResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateFHIRDatastoreCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateFHIRDatastoreCommand(input, context);
    };
    CreateFHIRDatastoreCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateFHIRDatastoreCommand(output, context);
    };
    return CreateFHIRDatastoreCommand;
}($Command));
export { CreateFHIRDatastoreCommand };
//# sourceMappingURL=CreateFHIRDatastoreCommand.js.map