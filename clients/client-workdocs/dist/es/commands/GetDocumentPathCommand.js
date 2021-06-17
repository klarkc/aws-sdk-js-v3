import { __extends } from "tslib";
import { GetDocumentPathRequest, GetDocumentPathResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDocumentPathCommand, serializeAws_restJson1GetDocumentPathCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the path information (the hierarchy from the root folder) for the
 *             requested document.</p>
 *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 *             requested document and only includes the IDs of the parent folders in the path. You can
 *             limit the maximum number of levels. You can also request the names of the parent
 *             folders.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, GetDocumentPathCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, GetDocumentPathCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new GetDocumentPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDocumentPathCommandInput} for command's `input` shape.
 * @see {@link GetDocumentPathCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDocumentPathCommand = /** @class */ (function (_super) {
    __extends(GetDocumentPathCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDocumentPathCommand(input) {
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
    GetDocumentPathCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "GetDocumentPathCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDocumentPathRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDocumentPathResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDocumentPathCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDocumentPathCommand(input, context);
    };
    GetDocumentPathCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDocumentPathCommand(output, context);
    };
    return GetDocumentPathCommand;
}($Command));
export { GetDocumentPathCommand };
//# sourceMappingURL=GetDocumentPathCommand.js.map