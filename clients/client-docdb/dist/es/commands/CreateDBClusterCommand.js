import { __extends } from "tslib";
import { CreateDBClusterMessage, CreateDBClusterResult } from "../models/models_0";
import { deserializeAws_queryCreateDBClusterCommand, serializeAws_queryCreateDBClusterCommand, } from "../protocols/Aws_query";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon DocumentDB cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, CreateDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, CreateDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new CreateDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBClusterCommand = /** @class */ (function (_super) {
    __extends(CreateDBClusterCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBClusterCommand(input) {
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
    CreateDBClusterCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DocDBClient";
        var commandName = "CreateDBClusterCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBClusterMessage.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBClusterResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBClusterCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBClusterCommand(input, context);
    };
    CreateDBClusterCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBClusterCommand(output, context);
    };
    return CreateDBClusterCommand;
}($Command));
export { CreateDBClusterCommand };
//# sourceMappingURL=CreateDBClusterCommand.js.map