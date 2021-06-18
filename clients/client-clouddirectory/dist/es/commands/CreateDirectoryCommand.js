import { __extends } from "tslib";
import { CreateDirectoryRequest, CreateDirectoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDirectoryCommand,
  serializeAws_restJson1CreateDirectoryCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <a>Directory</a> by copying the published schema into the
 *       directory. A directory cannot be created without a schema.</p>
 *          <p>You can also quickly create a directory using a managed schema, called the
 *         <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, CreateDirectoryCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, CreateDirectoryCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new CreateDirectoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDirectoryCommandInput} for command's `input` shape.
 * @see {@link CreateDirectoryCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDirectoryCommand = /** @class */ (function (_super) {
  __extends(CreateDirectoryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateDirectoryCommand(input) {
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
  CreateDirectoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "CreateDirectoryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDirectoryResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateDirectoryCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateDirectoryCommand(input, context);
  };
  CreateDirectoryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateDirectoryCommand(output, context);
  };
  return CreateDirectoryCommand;
})($Command);
export { CreateDirectoryCommand };
//# sourceMappingURL=CreateDirectoryCommand.js.map
