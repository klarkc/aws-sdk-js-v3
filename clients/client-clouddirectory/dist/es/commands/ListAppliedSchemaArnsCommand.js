import { __extends } from "tslib";
import { ListAppliedSchemaArnsRequest, ListAppliedSchemaArnsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAppliedSchemaArnsCommand,
  serializeAws_restJson1ListAppliedSchemaArnsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListAppliedSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListAppliedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListAppliedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAppliedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListAppliedSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAppliedSchemaArnsCommand = /** @class */ (function (_super) {
  __extends(ListAppliedSchemaArnsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAppliedSchemaArnsCommand(input) {
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
  ListAppliedSchemaArnsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListAppliedSchemaArnsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAppliedSchemaArnsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAppliedSchemaArnsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAppliedSchemaArnsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListAppliedSchemaArnsCommand(input, context);
  };
  ListAppliedSchemaArnsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListAppliedSchemaArnsCommand(output, context);
  };
  return ListAppliedSchemaArnsCommand;
})($Command);
export { ListAppliedSchemaArnsCommand };
//# sourceMappingURL=ListAppliedSchemaArnsCommand.js.map
