import { __extends } from "tslib";
import { ListDevelopmentSchemaArnsRequest, ListDevelopmentSchemaArnsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListDevelopmentSchemaArnsCommand,
  serializeAws_restJson1ListDevelopmentSchemaArnsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves each Amazon Resource Name (ARN) of schemas in the development
 *       state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListDevelopmentSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListDevelopmentSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListDevelopmentSchemaArnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDevelopmentSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListDevelopmentSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDevelopmentSchemaArnsCommand = /** @class */ (function (_super) {
  __extends(ListDevelopmentSchemaArnsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDevelopmentSchemaArnsCommand(input) {
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
  ListDevelopmentSchemaArnsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListDevelopmentSchemaArnsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDevelopmentSchemaArnsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDevelopmentSchemaArnsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDevelopmentSchemaArnsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListDevelopmentSchemaArnsCommand(input, context);
  };
  ListDevelopmentSchemaArnsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListDevelopmentSchemaArnsCommand(output, context);
  };
  return ListDevelopmentSchemaArnsCommand;
})($Command);
export { ListDevelopmentSchemaArnsCommand };
//# sourceMappingURL=ListDevelopmentSchemaArnsCommand.js.map
