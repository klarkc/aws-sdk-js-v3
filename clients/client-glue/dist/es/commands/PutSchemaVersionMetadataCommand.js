import { __extends } from "tslib";
import { PutSchemaVersionMetadataInput, PutSchemaVersionMetadataResponse } from "../models/models_1";
import { deserializeAws_json1_1PutSchemaVersionMetadataCommand, serializeAws_json1_1PutSchemaVersionMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutSchemaVersionMetadataCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutSchemaVersionMetadataCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new PutSchemaVersionMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSchemaVersionMetadataCommandInput} for command's `input` shape.
 * @see {@link PutSchemaVersionMetadataCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutSchemaVersionMetadataCommand = /** @class */ (function (_super) {
    __extends(PutSchemaVersionMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutSchemaVersionMetadataCommand(input) {
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
    PutSchemaVersionMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "PutSchemaVersionMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutSchemaVersionMetadataInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutSchemaVersionMetadataResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutSchemaVersionMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutSchemaVersionMetadataCommand(input, context);
    };
    PutSchemaVersionMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutSchemaVersionMetadataCommand(output, context);
    };
    return PutSchemaVersionMetadataCommand;
}($Command));
export { PutSchemaVersionMetadataCommand };
//# sourceMappingURL=PutSchemaVersionMetadataCommand.js.map