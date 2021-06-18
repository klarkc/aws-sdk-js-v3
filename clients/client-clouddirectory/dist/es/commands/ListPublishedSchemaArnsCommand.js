import { __extends } from "tslib";
import { ListPublishedSchemaArnsRequest, ListPublishedSchemaArnsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListPublishedSchemaArnsCommand,
  serializeAws_restJson1ListPublishedSchemaArnsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudDirectoryClient, ListPublishedSchemaArnsCommand } from "@aws-sdk/client-clouddirectory"; // ES Modules import
 * // const { CloudDirectoryClient, ListPublishedSchemaArnsCommand } = require("@aws-sdk/client-clouddirectory"); // CommonJS import
 * const client = new CloudDirectoryClient(config);
 * const command = new ListPublishedSchemaArnsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPublishedSchemaArnsCommandInput} for command's `input` shape.
 * @see {@link ListPublishedSchemaArnsCommandOutput} for command's `response` shape.
 * @see {@link CloudDirectoryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPublishedSchemaArnsCommand = /** @class */ (function (_super) {
  __extends(ListPublishedSchemaArnsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListPublishedSchemaArnsCommand(input) {
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
  ListPublishedSchemaArnsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudDirectoryClient";
    var commandName = "ListPublishedSchemaArnsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListPublishedSchemaArnsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPublishedSchemaArnsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListPublishedSchemaArnsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ListPublishedSchemaArnsCommand(input, context);
  };
  ListPublishedSchemaArnsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ListPublishedSchemaArnsCommand(output, context);
  };
  return ListPublishedSchemaArnsCommand;
})($Command);
export { ListPublishedSchemaArnsCommand };
//# sourceMappingURL=ListPublishedSchemaArnsCommand.js.map
